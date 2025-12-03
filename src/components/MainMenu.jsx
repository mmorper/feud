import { useState } from 'react'
import { motion } from 'framer-motion'
import { getAvailableGames } from '../utils/questionParser'

function MainMenu({ onStartGame }) {
  const [selectedGame, setSelectedGame] = useState('sample.md')
  const availableGames = getAvailableGames()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen p-8"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-7xl font-game text-feud-gold mb-12 text-center"
        style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}
      >
        VIRGIL FEUD
      </motion.h1>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white/10 backdrop-blur-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Select Game</h2>

        <select
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-white/20 text-white border-2 border-feud-gold focus:outline-none focus:border-yellow-300 text-lg"
        >
          {availableGames.map(game => (
            <option key={game.name} value={game.name} className="bg-feud-blue text-white">
              {game.displayName}
            </option>
          ))}
        </select>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onStartGame(selectedGame)}
          className="w-full py-4 bg-feud-gold text-feud-blue font-bold text-xl rounded-lg shadow-lg hover:bg-yellow-300 transition-colors"
        >
          START GAME
        </motion.button>

        <div className="mt-8 pt-6 border-t border-white/20">
          <h3 className="text-lg font-bold text-white mb-2">Quick Info</h3>
          <ul className="text-sm text-white/80 space-y-1">
            <li>• 3 Rounds + Fast Money</li>
            <li>• First to 500 points wins</li>
            <li>• Host controls via keyboard</li>
            <li>• Press ESC anytime for controls</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center text-white/60 text-sm"
      >
        <p>Press <kbd className="px-2 py-1 bg-white/20 rounded">ESC</kbd> during game to view host controls</p>
      </motion.div>
    </motion.div>
  )
}

export default MainMenu
