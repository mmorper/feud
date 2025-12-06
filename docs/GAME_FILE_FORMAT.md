# Game Questions Directory

This folder contains the question sets for Family Feud games. Each `.md` (markdown) file represents one complete game with 3 rounds and Fast Money questions.

## Adding New Games

1. **Create a new markdown file** in this directory (e.g., `christmas-edition.md`, `sports-trivia.md`)
2. **Follow the format** shown in `sample.md`
3. The game will **automatically appear** in the game selection menu
4. **Restart the dev server** if it's running (`Ctrl+C` then `npm run dev`)

## File Format

Each game file must follow this structure:

```markdown
## Round 1

### Question 1
**Your question here**

1. Answer 1 - 45
2. Answer 2 - 30
3. Answer 3 - 15
4. Answer 4 - 7
5. Answer 5 - 3

### Question 2
...

### Question 3
...

### Question 4
...

### Question 5
...

## Round 2

### Question 1
...

(5 questions for Round 2)

## Round 3

### Question 1
...

(5 questions for Round 3)

## Fast Money Round

### Question 1
**Name a...**

1. Answer 1 - 40
2. Answer 2 - 30
...

(3 questions for Fast Money)
```

## Requirements

- **3 Rounds** with **4-5 questions each** (3 questions supported for backwards compatibility)
- **Fast Money** with exactly **3 questions** (REQUIRED but not yet playable in-game)
- **2-5 answers** per question
- Each answer must have a **point value** (number)
- Use the format: `1. Answer Text - Points`

**⚠️ Important:** The game parser requires Fast Money questions in all game files, even though Fast Money gameplay is not yet implemented. Without Fast Money, the file will fail validation.

## File Naming

The filename will be converted to the display name:
- `sample.md` → "Sample"
- `christmas-edition.md` → "Christmas Edition"
- `family_friendly.md` → "Family Friendly"

Use hyphens (`-`) or underscores (`_`) to separate words.

## Tips for Creating Questions

1. **Survey-style questions**: Ask "Name something..." or "What do people..."
2. **Point distribution**: Top answer should be ~40-50, lowest ~3-5
3. **Total points**: Aim for ~100 points per question
4. **Question count**: Use 4-5 questions per round for better gameplay (ensures games reach 500 points)
5. **Variety**: Mix easy and challenging questions
6. **Family-friendly**: Keep content appropriate for all ages

## Example Question Types

- Name something you take to the beach
- Name a popular pizza topping
- Name something people do when they can't sleep
- Name a reason you might be late to work
- Name a fruit that's red
- Name something you associate with a pirate

## Testing Your Game

1. Save your new `.md` file in this directory
2. Restart the dev server
3. Open the game in your browser
4. Select your new game from the dropdown
5. Play through to verify all questions work

## Validation

The game will automatically validate your file and show errors if:
- Wrong number of rounds or questions
- Missing or invalid answers
- Incorrect file format

Check the browser console for detailed error messages.

## Sharing Games

To share your custom game files:
1. Copy the `.md` file
2. Send to others who have the game installed
3. They just need to place it in their `Game_Questions/` folder
4. Restart and play!

## Have Fun!

Create themed games for:
- Holidays (Christmas, Halloween, etc.)
- Special occasions (birthdays, anniversaries)
- Topics (sports, movies, music, food)
- Custom family/friend editions with inside jokes
