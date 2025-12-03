# Virgil Feud

A browser-based game show with host controls for running live game sessions with two teams.

![Virgil Feud Gameplay Screenshot](./docs/screenshot.png)


## Prerequisites

Before you can run this project, you need to have **Node.js** installed on your machine.

### Installing Node.js

1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version for your operating system
3. Run the installer and follow the installation prompts
4. Verify installation by opening a terminal/command prompt and running:
   ```bash
   node --version
   npm --version
   ```
   Both commands should return version numbers.

## Installation

1. **Copy this entire project folder** to your desired location

2. **Open a terminal/command prompt** and navigate to the project folder:
   ```bash
   cd /path/to/family_feud
   ```

3. **Install dependencies** (this downloads all required packages):
   ```bash
   npm install
   ```
   This may take a few minutes the first time. You only need to do this once (or after updates).

## Running the Game

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and go to the URL shown in the terminal (usually `http://localhost:5173`)

3. The game will automatically reload when you make changes to the code

4. **To stop the server**, press `Ctrl+C` in the terminal

## Building for Production

To create a standalone version that can be hosted anywhere:

```bash
npm run build
```

This creates a `dist` folder with all files needed to run the game. You can:
- Copy the `dist` folder to any web server
- Open `dist/index.html` directly in a browser (some features may require a local server)

To preview the production build locally:
```bash
npm run preview
```

## Features

### Core Gameplay
- 🎮 **Host-Controlled**: Single host operates the game via keyboard
- 👥 **Two Team Competition**: Classic game show format
- 🎯 **3 Regular Rounds**: 3 questions per round, 9 questions total (Fast Money not yet playable)
- ⌨️ **Full Keyboard Controls**: Complete host interface with shortcuts
- 🏆 **Auto-Scoring**: First to 500 points or highest after all rounds
- 🔄 **Auto-Switch**: Teams automatically switch after 3 strikes

### Visual Polish
- 🎨 **Modern UI**: React, Tailwind CSS, and Framer Motion
- 🔄 **Flip Animations**: Vertical card flip when revealing answers
- 💥 **Shake Effects**: Strike indicators shake on impact
- 🎯 **Counting Animations**: Points count up smoothly
- 🎊 **Confetti Celebration**: Winner screen with falling confetti
- 👁️ **Toggle Controls**: ESC key to show/hide host controls overlay

### Audio & Content
- 🔊 **Sound System**: Plays effects for reveals, strikes, banking (optional sound files)
- 📝 **Multiple Games**: Automatically loads all .md files from Game_Questions folder
- ✏️ **Easy Customization**: Simple markdown format for creating new games
- ⚡ **Fast Performance**: Built with Vite for instant hot reload

## Project Structure

```
family_feud/
├── Game_Questions/          # Markdown files with game questions
│   ├── sample.md           # Sample question format
│   └── README.md           # Game file format guide
├── prompts/                # AI prompt system for creating game files
│   ├── game-file-generator-prompt.md  # Main system prompt
│   ├── USAGE_GUIDE.md                 # Setup & usage instructions
│   └── FORMAT_QUICK_REFERENCE.md      # Format cheat sheet
├── Requirements/           # Project documentation
│   ├── todo.md            # Development task list
│   └── host_controls.md   # Keyboard controls reference
├── docs/                  # Documentation assets
│   ├── QUICKSTART.md      # Quick setup guide
│   └── screenshot.png     # Game screenshot (add your own)
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── MainMenu.jsx      # Main menu screen
│   │   ├── TeamSetup.jsx     # Team setup screen
│   │   ├── GameBoard.jsx     # Main game board
│   │   └── GameOver.jsx      # Winner screen
│   ├── utils/            # Utility functions
│   │   └── questionParser.js # Markdown parser
│   ├── hooks/            # Custom React hooks
│   │   ├── useSounds.js      # Sound effects hook
│   │   └── useCountUp.js     # Counting animation hook
│   ├── assets/           # Images, sounds, etc.
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── public/               # Static assets
│   └── sounds/           # Sound effect files (optional)
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # This file
```

## Adding New Questions

### Quick Start: Use the AI Prompt

The easiest way to create new game files is to use our **AI-powered Game File Generator**!

📁 **Location:** `/prompts/game-file-generator-prompt.md`

This system prompt guides you through creating compliant game files step-by-step. It works with:
- Claude Projects ([claude.ai](https://claude.ai/projects))
- Custom GPTs (ChatGPT)
- LibreChat agents

**Features:**
- ✅ Phase-based workflow (Discovery → Generation → Review → Validation)
- ✅ Acts as subject matter expert based on your theme
- ✅ Built-in validation to ensure parser compliance
- ✅ Good/bad examples and quality checks
- ✅ Interactive refinement before final generation

See `/prompts/USAGE_GUIDE.md` for complete setup and usage instructions.

### Manual Creation

1. Create a new `.md` file in the `Game_Questions/` folder
2. Follow the format in `Game_Questions/sample.md`
3. The game will automatically detect the new file

**Question File Format:**
```markdown
## Round 1

### Question 1
**Survey Says: Your question here**

1. Answer 1 - 45
2. Answer 2 - 30
3. Answer 3 - 15
4. Answer 4 - 7
5. Answer 5 - 3

[... 2 more questions ...]

## Round 2
[... 3 questions ...]

## Round 3
[... 3 questions ...]

## Fast Money Round
[... 3 questions - REQUIRED but not yet playable ...]
```

**⚠️ Important:** Game files must include a Fast Money Round section (3 questions) for the parser to accept them, even though Fast Money gameplay is not yet implemented. The prompt system handles this automatically.

## Host Controls

The host operates the game using keyboard shortcuts. See [Requirements/host_controls.md](Requirements/host_controls.md) for the complete reference.

**Quick Reference:**
- `1-5`: Reveal answers
- `X`: Add strike (auto-switches team after 3rd)
- `Backspace`: Remove strike
- `Spacebar`: Bank points to active team
- `S`: Steal points to opposing team
- `Tab`: Switch active team
- `Enter`: Next question/round
- `R`: Reset current question
- `N`: Skip question
- `ESC`: Toggle host controls visibility

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animations
- **JavaScript (ES6+)**: Programming language

## Troubleshooting

### Port Already in Use
If you see "Port 5173 is already in use":
- Stop any other Vite/development servers running
- Or change the port in `vite.config.js`

### Dependencies Not Installing
- Make sure you have a stable internet connection
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again
- Make sure you're using Node.js version 18 or higher

### Game Not Loading
- Check the browser console for errors (F12 or right-click > Inspect)
- Make sure the dev server is running (`npm run dev`)
- Try clearing browser cache and reloading

## License

This project is for educational and entertainment purposes.

## Current Status

**✅ FULLY FUNCTIONAL & PRODUCTION-READY!**

The game is complete and polished with all planned features implemented!

**Core Features:**
- ✅ Main menu with multiple game file selection
- ✅ Team setup and name entry
- ✅ Complete game board with all controls
- ✅ Answer reveal system with vertical flip animations
- ✅ Strike system with shake animations (auto-switches at 3 strikes)
- ✅ Point banking and stealing mechanics
- ✅ Smooth counting animations for all scores
- ✅ Round progression through all 3 rounds
- ✅ Win condition checking (500 points or end of rounds)
- ✅ Winner screen with confetti effects
- ✅ Sound effects system (graceful fallback if files missing)
- ✅ ESC key to toggle host controls overlay
- ✅ Multiple game file support (auto-detects all .md files)
- ✅ Complete game flow from menu to winner

**Possible Future Enhancements:**
- Face-off buzzer system for question starts
- Fast Money bonus round
- Additional sound effects and music
- More elaborate animations
- Mobile/tablet optimization

See [Requirements/todo.md](Requirements/todo.md) for development history.

## Adding Your Own Screenshot

To replace the screenshot with your own:

1. Run `npm run dev` and navigate to the game board
2. Take a screenshot (Cmd+Shift+4 on Mac, Win+Shift+S on Windows)
3. Save as `screenshot.png` in the `docs/` folder (overwrites existing)
4. The README will automatically display your new screenshot!

## Support & Documentation

For additional help, refer to:
- [docs/QUICKSTART.md](docs/QUICKSTART.md) - Quick setup guide
- **[prompts/USAGE_GUIDE.md](prompts/USAGE_GUIDE.md) - AI game file generator setup**
- **[prompts/FORMAT_QUICK_REFERENCE.md](prompts/FORMAT_QUICK_REFERENCE.md) - Format cheat sheet**
- [Requirements/host_controls.md](Requirements/host_controls.md) - Complete keyboard reference
- [Game_Questions/README.md](Game_Questions/README.md) - How to create custom games manually
- [Requirements/todo.md](Requirements/todo.md) - Development history
- [public/sounds/README.md](public/sounds/README.md) - How to add sound effects
