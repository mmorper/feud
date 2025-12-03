import { useEffect, useState } from 'react'

/**
 * Custom hook for animating number counts
 * @param {number} end - The target number to count to
 * @param {number} duration - Duration of the animation in milliseconds
 * @returns {number} - The current animated value
 */
export function useCountUp(end, duration = 1000) {
  const [count, setCount] = useState(end)

  useEffect(() => {
    // If end is 0, set immediately
    if (end === 0) {
      setCount(0)
      return
    }

    // Start from current count
    let startValue = count
    const difference = end - startValue
    const startTime = Date.now()

    // If no change, don't animate
    if (difference === 0) return

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(startValue + difference * easeOut)

      setCount(currentCount)

      if (progress >= 1) {
        setCount(end)
        clearInterval(timer)
      }
    }, 16) // ~60fps

    return () => clearInterval(timer)
  }, [end])

  return count
}
