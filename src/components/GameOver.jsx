import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Confetti from './Confetti'
import virtruLogo from '../assets/imgs/virtru_logo_w.svg'

function GameOver({ teams, scores, onPlayAgain }) {
  const isTie = scores.team1 === scores.team2
  const winner = isTie ? 'TIE GAME' : (scores.team1 > scores.team2 ? teams.team1 : teams.team2)
  const winningScore = Math.max(scores.team1, scores.team2)
  const losingScore = Math.min(scores.team1, scores.team2)
  const buttonRef = useRef(null)

  // Auto-focus the Play Again button when component mounts
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen p-8"
    >
      {/* Confetti celebration effect */}
      <Confetti />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-8xl font-game text-feud-gold mb-4 text-center animate-pulse">
          {isTie ? 'TIE GAME!' : 'WINNER!'}
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white/10 backdrop-blur-md rounded-lg p-12 text-center"
      >
        <motion.h2
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl font-bold text-white mb-8"
        >
          {winner}
        </motion.h2>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center gap-8 text-2xl">
            <span className="text-white font-bold">{teams.team1}</span>
            <span className="text-feud-gold font-game text-4xl">{scores.team1}</span>
          </div>
          <div className="flex justify-between items-center gap-8 text-2xl">
            <span className="text-white font-bold">{teams.team2}</span>
            <span className="text-feud-gold font-game text-4xl">{scores.team2}</span>
          </div>
        </div>

        <motion.button
          ref={buttonRef}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPlayAgain}
          className="mt-8 px-12 py-4 bg-feud-gold text-feud-blue font-bold text-2xl rounded-lg shadow-lg hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-400"
        >
          PLAY AGAIN
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-white/60 text-lg mb-4">
          Made by Marketers with Zero Coding Skills
        </p>
        <motion.img
          src={virtruLogo}
          alt="Virtru"
          className="mx-auto opacity-85"
          style={{ width: '90px', height: 'auto' }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default GameOver
