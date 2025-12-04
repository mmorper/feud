# How to Use the AI Prompt System

This guide explains how to use the two AI system prompts for creating Family Feud content:
1. **Game File Generator** - Creates game questions and answers
2. **Host Sheet Generator** - Transforms game files into print-friendly host answer sheets

## Setup

### For Claude Projects
1. Go to [claude.ai/projects](https://claude.ai/projects)
2. Create a new project (or open existing one)
3. Click "Set custom instructions"
4. Copy the entire contents of `game-generator.md`
5. Paste into the custom instructions field
6. Save

### For Custom GPT (ChatGPT)
1. Go to [chat.openai.com/gpts/editor](https://chat.openai.com/gpts/editor)
2. Create a new GPT or edit existing one
3. In the "Instructions" section, paste the prompt content
4. Configure name/description as desired
5. Save and publish (private or public)

### For LibreChat
1. Open LibreChat settings
2. Navigate to Agents or Custom Prompts
3. Create a new agent
4. Paste the prompt content into the system message field
5. Save the agent configuration
6. Select the agent when starting a new conversation

---

## Part 1: Game File Generator

---

## How to Use the Game Generator

### Basic Workflow

1. **Start a conversation** with the AI using the system prompt
2. **The AI will guide you** through 4 phases:
   - **Phase 1:** Discovery (theme, audience, topics)
   - **Phase 2:** Question generation & review
   - **Phase 3:** Refinement (if needed)
   - **Phase 4:** Final file generation

### Example Conversation Flow

**You:** "I want to create a Christmas-themed Family Feud game"

**AI:** Will ask you questions like:
- What age group is this for?
- Any specific Christmas topics to include/avoid?
- Do you have a preferred filename?

**You:** Provide answers, e.g., "Family-friendly, all ages. Include Christmas traditions and holiday foods. Filename: christmas-special.md"

**AI:** Will generate draft questions and ask for your review

**You:** "Looks good!" or "Can you change question 2 in Round 1?"

**AI:** Will generate the final markdown file with validation

---

## Tips for Best Results

### Theme Selection
- ✅ **Broad themes work best:** "Movies", "Food", "Sports", "Holidays"
- ✅ **Specific themes are fine:** "80s Movies", "Italian Food", "NFL Football"
- ❌ **Avoid overly niche:** "Rare Pokemon Cards" (too specific for survey-style questions)

### Providing Context
Give the AI helpful context:
- "This is for a family reunion with ages 8-80"
- "Make it challenging for trivia buffs"
- "Keep it simple for younger kids"
- "Include modern pop culture references"

### During Review Phase
You can request changes:
- "Make question 3 easier"
- "Change the points distribution on Round 2, Question 1"
- "Replace the Fast Money questions with food-related ones"
- "Add more variety to Round 3"

---

## What the AI Will Deliver

### Final Output Includes:

1. **Complete markdown file** ready to use
2. **Validation summary** confirming compliance
3. **Suggested filename** (if you didn't provide one)
4. **Usage instructions** for adding it to your game

### File Structure:
- **3 regular rounds** (12-15 questions total, 4-5 per round recommended)
- **Fast Money round** (3 questions) - **Required but not yet playable**
- **2-5 answers per question**
- **Point values for each answer**

**Note:** All game files must include Fast Money questions for the parser to accept them, even though Fast Money gameplay is not yet implemented. The AI generator handles this automatically. Files with 3 questions per round (legacy format) are still supported but 4-5 questions per round is recommended for better gameplay.

---

## Troubleshooting

### "The AI generated invalid format"
- The prompt includes self-validation, but if issues occur:
- Copy the generated file to the Game_Questions folder
- Check browser console for specific errors
- Report back to the AI: "The parser failed with error: [error message]"

### "Questions don't match my theme"
- Be more specific in Phase 1 about what you want
- During Phase 2, request revisions: "Can you make these more focused on [specific aspect]?"

### "Points don't add up to 100"
- This is intentional! The prompt allows ±10 variation for realism
- If you want exact totals, mention: "Please make sure points total exactly 100"

### "I want to start over"
- Just say: "Let's start fresh with a new theme"
- The AI will restart from Phase 1

---

## Advanced Usage

### Multiple Theme Variations
"Create 3 different question sets for a Sports theme: one for baseball, one for basketball, one for football"

### Seasonal Updates
"Create a Valentine's Day version of the sample game"

### Difficulty Levels
"Make an 'Expert Mode' version with harder questions"

### Custom Requirements
"I need exactly 5 answers for every question" (override the 2-5 default)

---

## Testing Your Generated Game

1. Save the generated markdown file as `[filename].md`
2. Place it in `/Game_Questions/` folder
3. Restart your dev server (`Ctrl+C`, then `npm run dev`)
4. Open the game in your browser
5. Select your new game from the dropdown menu
6. Play through to verify:
   - All questions load correctly
   - All answers appear
   - Points are calculated properly
   - No console errors

---

## Sharing Your Prompt

Feel free to share this prompt with others! You can:
- Fork/copy the prompt file
- Modify it for your specific needs
- Share your custom games created with it

## Support

If you encounter issues:
1. Check the browser console for parser errors
2. Review the `docs/GAME_FILE_FORMAT.md` for format requirements
3. Compare your generated file to `Game_Questions/sample.md`
4. Verify the prompt is loaded correctly in your AI interface

---

## Have Fun!

This prompt is designed to make creating Family Feud games easy and enjoyable. The AI will guide you through the process, ensure compliance, and help you create engaging content for your players.

Happy game creating! 🎮

---

## Part 2: Host Sheet Generator

---

## What is the Host Sheet Generator?

Once you've created (or already have) a game file, you need a way for the host to reference answers during live gameplay. The **Host Sheet Generator** takes your markdown game file and transforms it into a clean, print-friendly answer sheet.

**Why you need this:**
- ❌ Raw markdown files have clutter (`##`, `**`, formatting syntax)
- ❌ Hard to scan quickly while managing keyboard controls
- ❌ Not optimized for printing

**What you get:**
- ✅ Clean, scannable layout with no markdown syntax
- ✅ Three format options (Minimal, Standard, Detailed)
- ✅ Print-ready documents
- ✅ Optional tracking elements (checkboxes, strike counters)

---

## Setup (Same as Game Generator)

Use the same setup process as above, but paste the contents of `host-sheet-generator.md` instead.

**Quick tip:** You can set up both prompts as separate Claude Projects or Custom GPTs:
- One named "Family Feud Game Creator"
- One named "Family Feud Host Sheet Maker"

This way you can easily switch between creating games and generating host sheets.

---

## How to Use the Host Sheet Generator

### Basic Workflow

1. **Provide your game file content**
   - Copy the entire contents of your game .md file
   - Or tell the AI: "Use the file virtru-marketing-team.md" (if you've uploaded it)

2. **Choose a format style:**
   - **MINIMAL** - Ultra-compact, one page, answers on same line
   - **STANDARD** - Balanced with checkboxes and vertical answers (recommended)
   - **DETAILED** - Includes hosting tips, strike tracking, keyboard reminders

3. **Get your host sheet**
   - AI generates a clean, print-ready document
   - Copy/paste into a text editor or save as .md/.txt
   - Print and keep next to your keyboard during gameplay

### Example Conversation Flow

**You:** "Here's my game file: [paste entire virtru-marketing-team.md content]"

**AI:** "Got it! I can see this is a Virtru marketing-themed game with 3 rounds and 14 questions. Which format would you like? 1) MINIMAL, 2) STANDARD, or 3) DETAILED?"

**You:** "Standard format please"

**AI:** [Generates clean host sheet with checkboxes, validates content, provides filename suggestion]

---

## Format Options Explained

### 🎯 MINIMAL Format
**Best for:** Experienced hosts, one-page layouts, compact printing

**What it looks like:**
```
Q1: Name something you take to the beach
1. Towel - 38 | 2. Sunscreen - 26 | 3. Umbrella - 15 | 4. Cooler - 12 | 5. Beach Ball - 9
```

**Pros:** Ultra-compact, fits on 1-2 pages
**Cons:** Less scannable, no tracking elements

---

### 📋 STANDARD Format (Recommended)
**Best for:** Most use cases, balanced readability

**What it looks like:**
```
[ ] Question 1: Name something you take to the beach

    1. Towel - 38
    2. Sunscreen - 26
    3. Umbrella - 15
    4. Cooler - 12
    5. Beach Ball - 9
```

**Pros:** Clean, scannable, checkboxes for tracking, professional look
**Cons:** Takes 2-3 pages

---

### 📖 DETAILED Format
**Best for:** New hosts, training sessions, complex games

**What it looks like:**
```
[ ] Q1: Name something you take to the beach

    [1] Towel ......................... 38 pts
    [2] Sunscreen ..................... 26 pts
    [3] Umbrella ...................... 15 pts
    [4] Cooler ........................ 12 pts
    [5] Beach Ball ....................  9 pts

    Strikes: ___ ___ ___    | Action: Bank [ ] Steal [ ]
```

**Pros:** Includes hosting tips, strike tracking, keyboard reminders, point tracking space
**Cons:** Takes 3-4 pages

---

## Tips for Best Results

### Provide Clean Input
- Paste the entire game file (all rounds)
- Make sure it's a properly formatted game file (generated by the Game Generator or manually created)
- Include everything from `## Round 1` to the end of `## Round 3`

### Choose the Right Format
- **First-time host?** → DETAILED (includes tips and reminders)
- **Experienced host?** → STANDARD (clean and professional)
- **Need ultra-compact?** → MINIMAL (one-page reference)

### Customization Requests
You can ask for modifications:
- "Can you make the answers horizontal instead of vertical?"
- "Add more space for notes"
- "Include point totals for each round"
- "Skip the checkboxes"

---

## What the AI Will Deliver

### Final Output Includes:

1. **Complete host sheet** ready to print
2. **Validation summary** (rounds, questions, answers counted)
3. **Content summary**: "3 rounds, 14 questions, 64 answers"
4. **Suggested filename**: `HOST_[game-name].md`
5. **Print instructions** and hosting reminders

### What Gets Excluded:

- **Fast Money Round** - Not yet playable, so it's excluded from host sheets
- **Markdown syntax** - All `##`, `**`, `###` stripped out
- **Extra formatting** - Clean text only

---

## Example Use Cases

### Use Case 1: Pre-Event Prep
**Scenario:** You're hosting a team event tomorrow

**Workflow:**
1. Use Game Generator to create "company-trivia.md"
2. Use Host Sheet Generator with STANDARD format
3. Print the host sheet
4. Bring it to the event, keep it next to your laptop

### Use Case 2: Multiple Games
**Scenario:** You have 3 different game files and need host sheets for all

**Workflow:**
1. Open Host Sheet Generator
2. Generate sheet for game 1 → Save as HOST_game1.md
3. Generate sheet for game 2 → Save as HOST_game2.md
4. Generate sheet for game 3 → Save as HOST_game3.md
5. Print all three, pick which game to play based on the audience

### Use Case 3: Format Testing
**Scenario:** Not sure which format works best for you

**Workflow:**
1. Generate all three formats (Minimal, Standard, Detailed)
2. Print or compare on screen
3. Pick your favorite and use that format going forward

---

## Troubleshooting

### "The AI missed some questions"
- Make sure you pasted the complete game file
- Check that the input file is properly formatted
- Tell the AI: "You missed Round 2, Question 3"

### "I want a different layout"
- Describe what you want: "Can you put all 3 rounds on one page?"
- The AI can customize beyond the three default formats

### "The output still has markdown syntax"
- This shouldn't happen, but if it does: "Please remove all markdown formatting (`##`, `**`, etc.)"

### "I need to regenerate with changes"
- Just say: "Can you regenerate with [your change]?"
- Example: "Can you regenerate without checkboxes?"

---

## Saving & Organizing Host Sheets

### Recommended File Structure:
```
/docs/host/
├── HOST_virtru-marketing-team_STANDARD.md
├── HOST_christmas-special_DETAILED.md
├── HOST_product-launch_MINIMAL.md
```

### Naming Convention:
`HOST_[game-name]_[FORMAT].md`

**Examples:**
- `HOST_company-trivia_STANDARD.md`
- `HOST_holiday-party_DETAILED.md`
- `HOST_sales-kickoff_MINIMAL.md`

---

## Quick Reference: Game Generator vs Host Sheet Generator

| Task | Use This Prompt |
|------|----------------|
| Creating new game questions | **Game File Generator** |
| Converting game to host sheet | **Host Sheet Generator** |
| Validating game file format | **Game File Generator** |
| Making host sheet more compact | **Host Sheet Generator** |
| Adding new questions to a game | **Game File Generator** |
| Printing host reference sheet | **Host Sheet Generator** |

---

## Complete Workflow Example

**Full workflow from idea to game day:**

1. **Create the game:**
   - Use Game File Generator
   - Theme: "Company Culture Trivia"
   - Save as: `Game_Questions/company-culture.md`

2. **Generate host sheet:**
   - Use Host Sheet Generator
   - Choose: STANDARD format
   - Save as: `docs/host/HOST_company-culture_STANDARD.md`

3. **Test the game:**
   - Run `npm run dev`
   - Select "company-culture" from dropdown
   - Play through to verify

4. **Prepare for event:**
   - Print host sheet
   - Open game in browser
   - Keep host sheet next to keyboard

5. **Host the game:**
   - Reference host sheet as teams guess
   - Press 1-5 to reveal matches
   - Track progress with checkboxes

---

## See Examples

Check out the `/docs/host/` folder for real examples of all three format styles generated from actual game files.

---

## Have Fun!

The combination of the Game Generator and Host Sheet Generator gives you everything you need to create and host professional Family Feud games. Create unlimited games, generate clean host sheets, and make your events unforgettable!

Happy hosting! 🎮🎉
