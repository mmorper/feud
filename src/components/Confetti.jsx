import { motion } from 'framer-motion'

/**
 * Confetti component that creates a celebration effect
 */
function Confetti() {
  // Generate random confetti pieces
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'][Math.floor(Math.random() * 5)],
    rotation: Math.random() * 360,
    size: Math.random() * 10 + 5,
    delay: Math.random() * 0.5
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            x: piece.x,
            y: -20,
            rotate: piece.rotation,
            opacity: 1
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation + 720,
            opacity: 0
          }}
          transition={{
            duration: 3,
            delay: piece.delay,
            ease: "easeIn"
          }}
          style={{
            position: 'absolute',
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: '2px'
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
