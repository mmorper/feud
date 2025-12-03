import { useState } from 'react'
import { motion } from 'framer-motion'

function TeamSetup({ onSetupComplete, onBack, loading, error }) {
  const [team1Name, setTeam1Name] = useState('')
  const [team2Name, setTeam2Name] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (team1Name.trim() && team2Name.trim() && !loading) {
      onSetupComplete(team1Name.trim(), team2Name.trim())
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen p-8"
    >
      <motion.h1
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        className="text-5xl font-game text-feud-gold mb-12"
        style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}
      >
        TEAM SETUP
      </motion.h1>

      <motion.form
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md rounded-lg p-8 w-full max-w-xl"
      >
        {/* Team 1 */}
        <div className="mb-8">
          <label className="block text-2xl font-bold text-feud-gold mb-3">
            Team 1 Name
          </label>
          <input
            type="text"
            value={team1Name}
            onChange={(e) => setTeam1Name(e.target.value)}
            placeholder="Enter Team 1 name..."
            className="w-full p-4 rounded-lg bg-white/20 text-white text-xl border-2 border-feud-gold focus:outline-none focus:border-yellow-300 placeholder-white/50"
            maxLength={20}
            required
          />
        </div>

        {/* Team 2 */}
        <div className="mb-8">
          <label className="block text-2xl font-bold text-feud-red mb-3">
            Team 2 Name
          </label>
          <input
            type="text"
            value={team2Name}
            onChange={(e) => setTeam2Name(e.target.value)}
            placeholder="Enter Team 2 name..."
            className="w-full p-4 rounded-lg bg-white/20 text-white text-xl border-2 border-feud-red focus:outline-none focus:border-red-400 placeholder-white/50"
            maxLength={20}
            required
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-500/20 border-2 border-red-500 rounded-lg text-white">
            <p className="font-bold">Error loading game:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4">
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            disabled={loading}
            className="flex-1 py-3 bg-gray-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            BACK
          </motion.button>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 bg-feud-gold text-feud-blue font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!team1Name.trim() || !team2Name.trim() || loading}
          >
            {loading ? 'LOADING...' : 'START PLAYING'}
          </motion.button>
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center text-white/60 text-sm max-w-md"
      >
        <p>Both teams will compete across 3 rounds plus Fast Money.</p>
        <p className="mt-2">First team to reach 500 points wins!</p>
      </motion.div>
    </motion.div>
  )
}

export default TeamSetup
