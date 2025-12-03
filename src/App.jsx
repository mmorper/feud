import { useState } from 'react'
import MainMenu from './components/MainMenu'
import TeamSetup from './components/TeamSetup'
import GameBoard from './components/GameBoard'
import GameOver from './components/GameOver'
import { loadGameFile } from './utils/questionParser'

function App() {
  const [gameState, setGameState] = useState('menu') // menu, setup, playing, gameOver, loading
  const [selectedGame, setSelectedGame] = useState(null)
  const [gameData, setGameData] = useState(null)
  const [teams, setTeams] = useState({ team1: '', team2: '' })
  const [scores, setScores] = useState({ team1: 0, team2: 0 })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const startGame = (gameName) => {
    setSelectedGame(gameName)
    setGameState('setup')
  }

  const setupTeams = async (team1Name, team2Name) => {
    setTeams({ team1: team1Name, team2: team2Name })
    setLoading(true)
    setError(null)

    try {
      // Load the game data from the markdown file
      const data = await loadGameFile(selectedGame)
      setGameData(data)
      setGameState('playing')
    } catch (err) {
      console.error('Failed to load game:', err)
      setError(err.message)
      setGameState('setup')
    } finally {
      setLoading(false)
    }
  }

  const endGame = (winner) => {
    setGameState('gameOver')
  }

  const resetGame = () => {
    setGameState('menu')
    setSelectedGame(null)
    setGameData(null)
    setTeams({ team1: '', team2: '' })
    setScores({ team1: 0, team2: 0 })
    setError(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-feud-blue to-blue-900">
      {gameState === 'menu' && (
        <MainMenu onStartGame={startGame} />
      )}

      {gameState === 'setup' && (
        <TeamSetup
          onSetupComplete={setupTeams}
          onBack={() => setGameState('menu')}
          loading={loading}
          error={error}
        />
      )}

      {gameState === 'playing' && gameData && (
        <GameBoard
          gameData={gameData}
          teams={teams}
          scores={scores}
          setScores={setScores}
          onGameEnd={endGame}
        />
      )}

      {gameState === 'gameOver' && (
        <GameOver
          teams={teams}
          scores={scores}
          onPlayAgain={resetGame}
        />
      )}
    </div>
  )
}

export default App
