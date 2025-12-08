import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSounds } from '../hooks/useSounds'
import { useCountUp } from '../hooks/useCountUp'

function GameBoard({ gameData, teams, scores, setScores, onGameEnd }) {
  const [currentRound, setCurrentRound] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [strikes, setStrikes] = useState(0)
  const [activeTeam, setActiveTeam] = useState(1) // 1 or 2
  const [roundPoints, setRoundPoints] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showControls, setShowControls] = useState(true) // Show/hide host controls
  const [round3StartScores, setRound3StartScores] = useState(null) // Track scores at start of round 3

  // Sound effects
  const { playSound } = useSounds()

  // Animated counters
  const animatedTeam1Score = useCountUp(scores.team1, 800)
  const animatedTeam2Score = useCountUp(scores.team2, 800)
  const animatedRoundPoints = useCountUp(roundPoints, 500)

  // Load current question's answers
  useEffect(() => {
    if (gameData && gameData.rounds[currentRound]?.questions[currentQuestion]) {
      const question = gameData.rounds[currentRound].questions[currentQuestion]
      setAnswers(question.answers.map(a => ({ ...a, revealed: false })))
      setStrikes(0)
      setRoundPoints(0)
    }
  }, [currentRound, currentQuestion, gameData])

  // Capture scores at the start of round 3 for tie-breaker logic
  useEffect(() => {
    if (currentRound === 2 && currentQuestion === 0 && round3StartScores === null) {
      setRound3StartScores({ team1: scores.team1, team2: scores.team2 })
    }
  }, [currentRound, currentQuestion, scores, round3StartScores])

  // Check for win condition after score updates
  useEffect(() => {
    if (scores.team1 >= 500 || scores.team2 >= 500) {
      onGameEnd()
    }
  }, [scores, onGameEnd])

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toLowerCase()

      // Number keys 1-5: Reveal answers
      if (['1', '2', '3', '4', '5'].includes(key)) {
        const index = parseInt(key, 10) - 1
        revealAnswer(index)
      }

      // X: Add strike
      else if (key === 'x') {
        addStrike()
      }

      // Backspace/Delete: Remove strike
      else if (key === 'backspace' || key === 'delete') {
        removeStrike()
      }

      // Spacebar: Bank points
      else if (key === ' ') {
        e.preventDefault()
        bankPoints()
      }

      // S: Steal
      else if (key === 's') {
        stealPoints()
      }

      // Tab: Switch teams
      else if (key === 'tab') {
        e.preventDefault()
        setActiveTeam(activeTeam === 1 ? 2 : 1)
      }

      // Enter: Next question/round
      else if (key === 'enter') {
        nextQuestion()
      }

      // R: Reset question
      else if (key === 'r') {
        resetQuestion()
      }

      // N: Skip question
      else if (key === 'n') {
        skipQuestion()
      }

      // Escape: Toggle host controls
      else if (key === 'escape') {
        setShowControls(!showControls)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [activeTeam, strikes, answers, roundPoints, currentRound, currentQuestion, showControls, gameData])

  const revealAnswer = (index) => {
    if (index >= 0 && index < answers.length && !answers[index].revealed) {
      const newAnswers = [...answers]
      newAnswers[index].revealed = true
      setAnswers(newAnswers)
      setRoundPoints(roundPoints + newAnswers[index].points)
      playSound('reveal') // Play reveal sound
    }
  }

  const addStrike = () => {
    if (strikes < 3) {
      const newStrikes = strikes + 1
      setStrikes(newStrikes)
      playSound('strike') // Play strike sound

      // Auto-switch to other team when 3rd strike is added
      if (newStrikes === 3) {
        setTimeout(() => {
          setActiveTeam(activeTeam === 1 ? 2 : 1)
          setStrikes(0) // Reset strikes when switching teams
        }, 800) // Delay to let animation complete
      }
    }
  }

  const removeStrike = () => {
    if (strikes > 0) {
      setStrikes(strikes - 1)
    }
  }

  const bankPoints = () => {
    if (roundPoints > 0) {
      setScores(prev => ({
        ...prev,
        [`team${activeTeam}`]: prev[`team${activeTeam}`] + roundPoints
      }))
      setRoundPoints(0)
      playSound('bank') // Play banking sound
    }
  }

  const stealPoints = () => {
    if (roundPoints > 0) {
      const opposingTeam = activeTeam === 1 ? 2 : 1
      setScores(prev => ({
        ...prev,
        [`team${opposingTeam}`]: prev[`team${opposingTeam}`] + roundPoints
      }))
      setRoundPoints(0)
      playSound('applause') // Play applause for steal
    }
  }

  const nextQuestion = () => {
    const currentRoundData = gameData.rounds[currentRound]

    if (currentQuestion < currentRoundData.questions.length - 1) {
      // Move to next question in current round
      setCurrentQuestion(currentQuestion + 1)
    } else if (currentRound === 2) {
      // End of round 3 - game over (with tie-breaker if needed)
      // If scores are tied, determine winner by who scored more in round 3
      if (scores.team1 === scores.team2 && round3StartScores) {
        const team1Round3Points = scores.team1 - round3StartScores.team1
        const team2Round3Points = scores.team2 - round3StartScores.team2

        // Award tie-breaker point to round 3 winner
        if (team1Round3Points > team2Round3Points) {
          setScores(prev => ({ ...prev, team1: prev.team1 + 1 }))
        } else if (team2Round3Points > team1Round3Points) {
          setScores(prev => ({ ...prev, team2: prev.team2 + 1 }))
        }
        // If still tied (both scored same in round 3), let scores remain tied
      }
      // Delay to allow tie-breaker point animation, then end game
      setTimeout(() => onGameEnd(), 500)
    } else if (currentRound < 2) {
      // Move to next round (only rounds 0->1 or 1->2)
      setCurrentRound(currentRound + 1)
      setCurrentQuestion(0)
    } else {
      // Fallback - shouldn't reach here, but end game anyway
      onGameEnd()
    }
  }

  const resetQuestion = () => {
    if (gameData && gameData.rounds[currentRound]?.questions[currentQuestion]) {
      const question = gameData.rounds[currentRound].questions[currentQuestion]
      setAnswers(question.answers.map(a => ({ ...a, revealed: false })))
      setStrikes(0)
      setRoundPoints(0)
    }
  }

  const skipQuestion = () => {
    setRoundPoints(0)
    nextQuestion()
  }

  const currentQuestionData = gameData.rounds[currentRound]?.questions[currentQuestion]
  const revealedCount = answers.filter(a => a.revealed).length

  return (
    <div className="min-h-screen p-8">
      {/* Header with scores */}
      <div className="flex justify-between items-center mb-8">
        {/* Team 1 */}
        <motion.div
          className={`p-6 rounded-lg ${activeTeam === 1 ? 'bg-feud-gold' : 'bg-feud-light-blue'} backdrop-blur-md`}
          animate={{ scale: activeTeam === 1 ? 1.05 : 1 }}
        >
          <h2 className={`text-2xl font-bold ${activeTeam === 1 ? 'text-feud-blue' : 'text-white'}`}>
            {teams.team1}
          </h2>
          <p className={`text-4xl font-game ${activeTeam === 1 ? 'text-feud-blue' : 'text-white'}`}>
            {animatedTeam1Score}
          </p>
        </motion.div>

        {/* Round info */}
        <div className="text-center">
          <h3 className="text-3xl font-game text-feud-gold mb-2">
            Round {currentRound + 1}
          </h3>
          <p className="text-xl text-white">Question {currentQuestion + 1} of {gameData.rounds[currentRound]?.questions.length || 0}</p>
          <p className="text-sm text-white/60 mt-2">{revealedCount} / {answers.length} revealed</p>
        </div>

        {/* Team 2 */}
        <motion.div
          className={`p-6 rounded-lg ${activeTeam === 2 ? 'bg-feud-gold' : 'bg-feud-light-blue'} backdrop-blur-md`}
          animate={{ scale: activeTeam === 2 ? 1.05 : 1 }}
        >
          <h2 className={`text-2xl font-bold ${activeTeam === 2 ? 'text-feud-blue' : 'text-white'}`}>
            {teams.team2}
          </h2>
          <p className={`text-4xl font-game ${activeTeam === 2 ? 'text-feud-blue' : 'text-white'}`}>
            {animatedTeam2Score}
          </p>
        </motion.div>
      </div>

      {/* Question */}
      <motion.div
        key={`${currentRound}-${currentQuestion}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white bg-feud-blue/50 backdrop-blur-md p-6 rounded-lg inline-block">
          {currentQuestionData?.text || 'Loading question...'}
        </h1>
      </motion.div>

      {/* Answer board */}
      <div className="max-w-4xl mx-auto mb-8 space-y-3">
        {answers.map((answer, index) => (
          <div key={index} className="perspective-1000">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                rotateX: answer.revealed ? [0, 90, 0] : 0
              }}
              transition={{
                x: { delay: index * 0.1 },
                opacity: { delay: index * 0.1 },
                rotateX: { duration: 0.6, ease: "easeInOut" }
              }}
              className={`flex items-center justify-between p-4 rounded-lg ${
                answer.revealed ? 'bg-feud-gold' : 'bg-feud-blue/50'
              } backdrop-blur-md border-2 ${
                answer.revealed ? 'border-yellow-400' : 'border-white/20'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-white w-12">
                  {index + 1}
                </span>
                <motion.span
                  className={`text-2xl font-bold ${answer.revealed ? 'text-feud-blue' : 'text-white/30'}`}
                  animate={{ scale: answer.revealed ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {answer.revealed ? answer.text.toUpperCase() : '???'}
                </motion.span>
              </div>
              <motion.span
                className={`text-3xl font-game ${answer.revealed ? 'text-feud-blue' : 'text-white/30'}`}
                animate={{ scale: answer.revealed ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {answer.revealed ? answer.points : '??'}
              </motion.span>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Strikes and Round Points */}
      <div className="flex justify-center gap-12 items-center">
        {/* Strikes */}
        <div className="flex gap-4">
          {[1, 2, 3].map(num => (
            <motion.div
              key={num}
              initial={{ scale: 0 }}
              animate={{
                scale: num <= strikes ? [1, 1.2, 1] : 1,
                rotate: num <= strikes ? [0, -10, 10, -10, 0] : 0,
                x: num <= strikes ? [0, -5, 5, -5, 0] : 0
              }}
              transition={{
                scale: { duration: 0.3 },
                rotate: { duration: 0.5 },
                x: { duration: 0.5 }
              }}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl font-bold ${
                num <= strikes ? 'bg-feud-red strike-x' : 'bg-white/20 text-white/30'
              }`}
            >
              {num <= strikes ? 'X' : num}
            </motion.div>
          ))}
        </div>

        {/* Round Points */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
          <p className="text-white text-lg mb-1">Round Points</p>
          <motion.p
            key={roundPoints}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            className="text-5xl font-game text-feud-gold"
          >
            {animatedRoundPoints}
          </motion.p>
        </div>
      </div>

      {/* Host controls hint */}
      {showControls && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-lg text-white text-sm max-w-xs"
        >
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold">Host Controls</p>
            <p className="text-xs text-white/60">Press ESC to hide</p>
          </div>
          <div className="space-y-1 text-xs">
            <p>1-5: Reveal | X: Strike | Delete: Undo</p>
            <p>Space: Bank | S: Steal | Tab: Switch Team</p>
            <p>Enter: Next | R: Reset | N: Skip</p>
          </div>
        </motion.div>
      )}

      {/* Show controls hint when hidden */}
      {!showControls && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg text-white text-xs"
        >
          Press ESC to show controls
        </motion.div>
      )}
    </div>
  )
}

export default GameBoard
