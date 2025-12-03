# Virgil Feud - Quick Start Guide

## Installation (One-Time Setup)

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Choose the LTS version
   - Verify: `node --version` should show v18 or higher

2. **Install Dependencies**
   ```bash
   cd family_feud
   npm install
   ```

## Running the Game

```bash
npm run dev
```

Then open your browser to: **http://localhost:5173**

That's it! The game should now be running.

## Stopping the Server

Press `Ctrl+C` in the terminal where the dev server is running.

## Project Files Created

```
family_feud/
├── Game_Questions/
│   └── sample.md              # Sample game questions
├── Requirements/
│   ├── todo.md               # Development roadmap
│   └── host_controls.md      # Keyboard controls
├── src/
│   ├── components/
│   │   ├── MainMenu.jsx      # Main menu screen
│   │   ├── TeamSetup.jsx     # Team name setup
│   │   ├── GameBoard.jsx     # Main game board
│   │   └── GameOver.jsx      # Winner screen
│   ├── utils/
│   │   └── questionParser.js # Markdown parser
│   ├── assets/sounds/        # Sound effects folder
│   ├── App.jsx              # Main app
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json             # Dependencies
├── vite.config.js          # Vite config
├── tailwind.config.js      # Tailwind config
├── index.html              # HTML entry
└── README.md               # Full documentation
```

## 🎉 Fully Functional & Polished!

### ✅ Core Features
- Main menu with multiple game file selection
- Team setup screen with loading states
- Game board with real data from markdown files
- All keyboard controls working perfectly
- Answer reveal with vertical flip animations
- Strike system with shake effects (auto-switches at 3 strikes)
- Point banking and stealing with counting animations
- Round progression through all 3 rounds
- Win condition checking (500 points or end of rounds)
- Winner screen with confetti effects

### ✅ Polish & Enhancements
- Sound effects system (graceful fallback if files missing)
- Smooth counting animations for all scores
- Vertical flip animations when revealing answers
- Shake animations when strikes are added
- Confetti celebration on winner screen
- ESC key to toggle host controls visibility
- Multiple game file support (auto-loads all .md files)
- Complete game flow from menu to winner

## How to Play the Game

1. **Start the server**: `npm run dev`
2. **Open browser**: http://localhost:5173 (or port shown in terminal)
3. **Select game**: Choose from available games in dropdown
4. **Enter team names**: Enter names for both teams
5. **Host the game**: Use keyboard controls

### Keyboard Controls (Host)

- **1-5**: Reveal answers (watch the flip animation!)
- **X**: Add a strike (auto-switches to other team after 3rd strike)
- **Backspace**: Undo last strike
- **Spacebar**: Bank points to active team
- **S**: Steal points to opposing team
- **Tab**: Manually switch active team
- **Enter**: Next question/round
- **R**: Reset current question
- **N**: Skip question
- **ESC**: Toggle host controls visibility

See [../Requirements/host_controls.md](../Requirements/host_controls.md) for complete reference.

## Adding Sound Effects (Optional)

The game includes a sound system that plays effects for:
- Revealing answers (ding/chime sound)
- Adding strikes (buzzer sound)
- Banking/stealing points (applause/celebration)

**To add sounds:**
1. Download free sound effects from [Mixkit](https://mixkit.co/free-sound-effects/) or similar
2. Place MP3 files in `public/sounds/`:
   - `correct.mp3` - For answer reveals
   - `wrong.mp3` - For strikes
   - `applause.mp3` - For banking/stealing
3. Restart the dev server
4. Sounds will play automatically!

See [../public/sounds/README.md](../public/sounds/README.md) for details.

## Creating Custom Games

1. Copy `Game_Questions/sample.md` to a new file (e.g., `holiday.md`)
2. Edit the questions and answers
3. Restart the dev server
4. Your new game appears in the dropdown automatically!

See [../Game_Questions/README.md](../Game_Questions/README.md) for the question format.

## Possible Future Enhancements

- Face-off buzzer system for question starts
- Fast Money bonus round
- Additional sound effects and background music
- More elaborate animations
- Mobile/tablet optimization

## Testing the Setup

Once running, you should see:
1. A blue "VIRGIL FEUD" main menu with game selection
2. "START GAME" button
3. Team name entry screen
4. Game board with animated answer cards
5. Host controls overlay (toggle with ESC)

## Troubleshooting

**Port in use?**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check terminal for errors

## Moving to Another Machine

1. Copy the entire `family_feud` folder
2. On the new machine:
   ```bash
   cd family_feud
   npm install
   npm run dev
   ```

That's it! All dependencies will be downloaded fresh.
