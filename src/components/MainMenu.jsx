import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAvailableGames } from '../utils/questionParser'

function MainMenu({ onStartGame }) {
  const [selectedGame, setSelectedGame] = useState('sample.md')
  const [showQuickInfo, setShowQuickInfo] = useState(true)
  const availableGames = getAvailableGames()

  // Load user preference from localStorage on mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('showQuickInfo')
    if (savedPreference !== null) {
      setShowQuickInfo(savedPreference === 'true')
    }
  }, [])

  // Save user preference to localStorage when toggled
  const toggleQuickInfo = () => {
    const newValue = !showQuickInfo
    setShowQuickInfo(newValue)
    localStorage.setItem('showQuickInfo', newValue.toString())
  }

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
          <button
            onClick={toggleQuickInfo}
            className="flex items-center justify-between w-full text-left group hover:opacity-80 transition-opacity"
            aria-expanded={showQuickInfo}
            aria-controls="quick-info-content"
          >
            <h3 className="text-lg font-bold text-white">Quick Info</h3>
            <motion.svg
              animate={{ rotate: showQuickInfo ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 text-white/60 group-hover:text-white/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
          <AnimatePresence initial={false}>
            {showQuickInfo && (
              <motion.ul
                id="quick-info-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-sm text-white/80 space-y-1 overflow-hidden"
                style={{ marginTop: '0.5rem' }}
              >
                <li>• 3 Rounds + Fast Money</li>
                <li>• First to 500 points wins</li>
                <li>• Host controls via keyboard</li>
                <li>• Press ESC anytime for controls</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default MainMenu
