# Sound Effects Directory

Place your game sound effect files in this directory. The game will work without sounds, but they enhance the experience!

## Required Sound Files

Add these MP3 files to this folder:

- **correct.mp3** - Plays when an answer is revealed (ding/chime sound)
- **wrong.mp3** - Plays when a strike is added (buzzer sound)
- **applause.mp3** - Plays when points are banked or stolen (celebration sound)
- **theme.mp3** - (Optional) Background music

## Finding Free Sound Effects

You can download free sound effects from:

- [Freesound.org](https://freesound.org/) - Requires free account
- [Zapsplat.com](https://www.zapsplat.com/) - Free with attribution
- [Mixkit.co](https://mixkit.co/free-sound-effects/) - Free, no attribution required
- [YouTube Audio Library](https://www.youtube.com/audiolibrary) - Free sound effects

## Recommended Searches

- **correct.mp3**: Search for "game correct", "ding", "chime", "success"
- **wrong.mp3**: Search for "buzzer", "wrong answer", "error buzz"
- **applause.mp3**: Search for "applause", "crowd cheer", "celebration"
- **theme.mp3**: Search for "Family Feud theme" or "game show music"

## File Format

- **Format**: MP3 (recommended) or WAV
- **Size**: Keep files under 1MB each for faster loading
- **Volume**: The game normalizes volume to 70%, but pre-normalize your files for best results

## Installation

1. Download your sound files
2. Rename them to match the names above
3. Copy them into this folder (`public/sounds/`)
4. Restart the dev server if running (`Ctrl+C` then `npm run dev`)

## Testing

Once files are added, play the game and:
- Press keys **1-5** to hear the reveal sound
- Press **X** to hear the strike sound
- Press **Spacebar** or **S** to hear the applause sound

The game console will show debug messages if sounds can't be loaded.
