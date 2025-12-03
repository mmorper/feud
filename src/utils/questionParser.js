/**
 * Parses markdown files from Game_Questions folder
 * Converts markdown format into structured game data
 */

// Import all markdown files from Game_Questions using Vite's glob import
const gameFiles = import.meta.glob('../../Game_Questions/*.md', {
  query: '?raw',
  eager: true
})

export function parseMarkdownGame(markdownContent) {
  const lines = markdownContent.split('\n').filter(line => line.trim() !== '')

  const game = {
    rounds: [
      { name: 'Round 1', questions: [] },
      { name: 'Round 2', questions: [] },
      { name: 'Round 3', questions: [] }
    ],
    fastMoney: []
  }

  let currentRound = null
  let currentQuestion = null
  let isFastMoney = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Save current question before starting a new section or question
    if ((line.startsWith('###') || line.startsWith('##')) && currentQuestion && currentQuestion.text) {
      if (isFastMoney) {
        game.fastMoney.push(currentQuestion)
      } else if (currentRound !== null) {
        game.rounds[currentRound].questions.push(currentQuestion)
      }
      currentQuestion = null
    }

    // Detect round headers
    if (line.startsWith('## Round 1')) {
      currentRound = 0
      isFastMoney = false
    } else if (line.startsWith('## Round 2')) {
      currentRound = 1
      isFastMoney = false
    } else if (line.startsWith('## Round 3')) {
      currentRound = 2
      isFastMoney = false
    } else if (line.startsWith('## Fast Money')) {
      isFastMoney = true
      currentRound = null
    }

    // Detect question headers
    else if (line.startsWith('### Question')) {
      currentQuestion = {
        text: '',
        answers: []
      }
    }

    // Detect question text (starts with "Survey Says:" or just bold text)
    else if (line.startsWith('**Survey Says:') || line.startsWith('**Name')) {
      const questionText = line.replace(/\*\*/g, '').replace('Survey Says: ', '')
      if (currentQuestion) {
        currentQuestion.text = questionText
      }
    }

    // Detect answers (numbered list)
    else if (/^\d+\./.test(line)) {
      const match = line.match(/^\d+\.\s*(.+?)\s*-\s*(\d+)/)
      if (match && currentQuestion) {
        const [, answerText, points] = match
        currentQuestion.answers.push({
          text: answerText.trim(),
          points: parseInt(points, 10),
          revealed: false
        })
      }
    }
  }

  // Save the last question if exists
  if (currentQuestion && currentQuestion.text) {
    if (isFastMoney) {
      game.fastMoney.push(currentQuestion)
    } else if (currentRound !== null) {
      game.rounds[currentRound].questions.push(currentQuestion)
    }
  }

  return game
}

/**
 * Loads a game file by name from the Game_Questions directory
 * Uses Vite's glob import feature to load markdown files
 */
export async function loadGameFile(filename) {
  try {
    // Find the matching file from the imported game files
    const matchingFile = Object.entries(gameFiles).find(([path]) =>
      path.endsWith(filename)
    )

    if (!matchingFile) {
      throw new Error(`Game file not found: ${filename}`)
    }

    // Get the markdown content
    const markdownContent = matchingFile[1].default

    if (!markdownContent) {
      throw new Error(`Failed to read content from: ${filename}`)
    }

    // Parse the markdown into game data
    const gameData = parseMarkdownGame(markdownContent)

    // Validate the game data
    const validation = validateGame(gameData)
    if (!validation.valid) {
      console.error('Game validation errors:', validation.errors)
      throw new Error(`Invalid game file: ${validation.errors.join(', ')}`)
    }

    return gameData
  } catch (error) {
    console.error('Error loading game file:', error)
    throw new Error(`Failed to load game file: ${filename}`)
  }
}

/**
 * Gets list of available game files
 * Scans the imported files and extracts filenames
 */
export function getAvailableGames() {
  const games = Object.keys(gameFiles).map(path => {
    // Extract filename from path (e.g., "../../Game_Questions/sample.md" -> "sample.md")
    const filename = path.split('/').pop()
    // Create display name by removing .md and capitalizing words
    const displayName = filename
      .replace('.md', '')
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    return {
      name: filename,
      displayName
    }
  })

  return games.length > 0 ? games : [{ name: 'sample.md', displayName: 'Sample Game' }]
}

/**
 * Validates a parsed game structure
 */
export function validateGame(game) {
  const errors = []

  // Check rounds exist
  if (!game.rounds || game.rounds.length !== 3) {
    errors.push('Game must have exactly 3 rounds')
  }

  // Check each round has 3 questions
  game.rounds?.forEach((round, idx) => {
    if (!round.questions || round.questions.length !== 3) {
      errors.push(`Round ${idx + 1} must have exactly 3 questions`)
    }

    // Check each question has 2-5 answers
    round.questions?.forEach((question, qIdx) => {
      if (!question.answers || question.answers.length < 2 || question.answers.length > 5) {
        errors.push(`Round ${idx + 1}, Question ${qIdx + 1} must have 2-5 answers`)
      }
    })
  })

  // Check Fast Money has 3 questions
  if (!game.fastMoney || game.fastMoney.length !== 3) {
    errors.push('Fast Money must have exactly 3 questions')
  }

  return {
    valid: errors.length === 0,
    errors
  }
}
