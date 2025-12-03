import { useRef, useCallback } from 'react'

/**
 * Custom hook for managing game sound effects
 * Gracefully handles missing sound files
 */
export function useSounds() {
  const audioCache = useRef({})
  const enabled = useRef(true)

  // Sound file paths (relative to public folder or imported)
  const soundPaths = {
    reveal: '/sounds/correct.mp3',
    strike: '/sounds/wrong.mp3',
    applause: '/sounds/applause.mp3',
    bank: '/sounds/applause.mp3', // Reuse applause for banking
    theme: '/sounds/theme.mp3'
  }

  /**
   * Preload a sound file
   */
  const preloadSound = useCallback((soundName) => {
    if (audioCache.current[soundName]) return

    try {
      const audio = new Audio(soundPaths[soundName])
      audio.preload = 'auto'
      audio.volume = 0.7
      audioCache.current[soundName] = audio
    } catch (error) {
      console.warn(`Failed to preload sound: ${soundName}`, error)
    }
  }, [])

  /**
   * Play a sound effect
   */
  const playSound = useCallback((soundName) => {
    if (!enabled.current) return

    try {
      // Preload if not already cached
      if (!audioCache.current[soundName]) {
        preloadSound(soundName)
      }

      const audio = audioCache.current[soundName]
      if (audio) {
        // Reset to start if already playing
        audio.currentTime = 0
        audio.play().catch(error => {
          // Fail silently if sound file doesn't exist
          console.debug(`Sound not available: ${soundName}`)
        })
      }
    } catch (error) {
      console.debug(`Error playing sound: ${soundName}`, error)
    }
  }, [preloadSound])

  /**
   * Toggle sound on/off
   */
  const toggleSound = useCallback(() => {
    enabled.current = !enabled.current
    return enabled.current
  }, [])

  /**
   * Set volume for all sounds (0-1)
   */
  const setVolume = useCallback((volume) => {
    Object.values(audioCache.current).forEach(audio => {
      if (audio) audio.volume = Math.max(0, Math.min(1, volume))
    })
  }, [])

  return {
    playSound,
    toggleSound,
    setVolume,
    preloadSound,
    isEnabled: () => enabled.current
  }
}
