# How to Use the AI Prompt System

This guide explains how to use the three AI system prompts for creating Family Feud content:
1. **Game File Generator** - Creates game questions and answers
2. **Host Sheet Generator** - Transforms game files into print-friendly host answer sheets
3. **Blend Games** - Intelligently combines 2-3 existing game files into one cohesive game

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

The combination of the Game Generator, Host Sheet Generator, and Blend Games prompt gives you everything you need to create and host professional Family Feud games. Create unlimited games, blend them together, generate clean host sheets, and make your events unforgettable!

Happy hosting! 🎮🎉

---

## Part 3: Blend Games

---

## What is the Blend Games Prompt?

Have multiple game files and want to combine the best questions from each into one mega-game? The **Blend Games** prompt intelligently merges 2-3 existing game files while:
- Maintaining format compliance with the game parser
- Re-balancing difficulty across rounds
- Normalizing point values for consistency
- Detecting and handling overlapping questions
- Ensuring thematic coherence

**Why you need this:**
- ❌ Manually copying questions from multiple files is tedious and error-prone
- ❌ Point values from different games may be inconsistent
- ❌ Difficulty progression gets lost when cobbling together random questions
- ❌ Easy to create duplicate or overlapping questions

**What you get:**
- ✅ Intelligent question selection based on your desired blend ratio
- ✅ Automatic difficulty re-balancing (easier → harder across rounds)
- ✅ Standardized point distributions
- ✅ Overlap detection with suggestions
- ✅ Coherence checking for tonal consistency
- ✅ Fully compliant game file ready to play

---

## Setup (Same as Other Prompts)

Use the same setup process as the Game Generator and Host Sheet Generator, but paste the contents of `blend-games.md` instead.

**Pro tip:** Set up all three prompts as separate Claude Projects or Custom GPTs:
- "Family Feud Game Creator" (game-generator.md)
- "Family Feud Host Sheet Maker" (host-sheet-generator.md)
- "Family Feud Game Blender" (blend-games.md)

---

## How to Use the Blend Games Prompt

### Basic Workflow

1. **Provide your source game files** (2-3 games maximum)
   - Copy/paste the entire contents of each game file
   - Or reference filenames if working within a project

2. **Specify your blend ratio** (optional)
   - Default: Equal distribution (50/50 for 2 games, 33/33/33 for 3 games)
   - Custom: "60% from Game A, 40% from Game B"
   - Smart defaults: AI suggests ratios based on game quality/size

3. **Confirm/modify suggested title**
   - AI suggests a title based on source games
   - You can accept or provide your own

4. **Review the blend preview** (Phase 2 approval gate)
   - AI shows selected questions organized by round
   - Flags overlapping/similar questions
   - Displays normalized point values
   - **You must approve before generation**

5. **Request refinements if needed** (Phase 3)
   - Swap specific questions
   - Adjust blend ratio
   - Resolve flagged duplicates
   - Modify title/theme

6. **Get your blended game** (Phase 4)
   - Fully validated, parser-compliant game file
   - Ready to save and play immediately

---

## Example Conversation Flow

**You:** "I want to blend two games: virtru-marketing-team.md and virtru-saas-metrics-2026-budget.md"

**AI:** "Got it! Please paste the full content of both game files, or confirm you'd like me to work with those specific files if I have access."

**You:** [Pastes both game files]

**AI:** "Perfect! I've parsed both games:
- **Marketing Team:** 13 questions, fun/lighthearted, team trivia
- **SaaS Metrics Budget:** 15 questions, serious/business, metrics-focused

**Suggested title:** 'Virtru Marketing Team & Budget Edition'
**Blend strategy:** 50/50 split, 7-8 questions from each

Sound good, or would you like to adjust anything?"

**You:** "That works!"

**AI:** [Presents Phase 2 preview with all selected questions, flagged overlaps, normalized points]

"Here's the blended game structure. I flagged one potential overlap. Would you like to proceed, make changes, or resolve the overlap?"

**You:** "Keep the version from the Budget game for the overlap. Proceed!"

**AI:** [Generates final validated file with blend summary and usage instructions]

---

## What Gets Blended

### Questions
- AI selects questions from all source games based on your blend ratio
- Questions are automatically re-balanced by difficulty:
  - **Round 1:** Easier, more universal questions
  - **Round 2:** Moderate difficulty
  - **Round 3:** More challenging or theme-specific
  - **Fast Money:** Quick, rapid-fire questions

### Point Values
- Original answer rankings preserved (1st answer = highest points, etc.)
- Point values normalized to standard distributions:
  - **5 answers:** 45-30-15-7-3 or 38-26-15-12-9
  - **4 answers:** 45-30-18-7 or 40-28-17-10
  - **3 answers:** 50-30-20 or 45-35-20
  - **2 answers:** 60-40 or 55-45
- Each question totals approximately 100 points

### Structure
- **3 regular rounds** (4-5 questions each = 12-15 total)
- **Fast Money round** (3 questions)
- Fully compliant with game parser requirements

---

## Smart Features

### Overlap Detection
The AI automatically detects similar or duplicate questions:

**Example:**
```
⚠️ OVERLAP DETECTED

Game A: "Name a key SaaS metric"
Game B: "Name a SaaS acronym every marketer should know"

These questions are very similar. I recommend keeping Game A's version (better wording).

Which would you prefer?
A) Keep Game A version
B) Keep Game B version
C) Merge both (combine answers)
```

### Coherence Checking
The AI validates that blended games have consistent tone:

**High coherence:** No warning needed
- Example: Blending "Virtru Marketing Team" + "Virtru Budget Metrics" (both Virtru-focused)

**Low coherence:** Warning issued
```
⚠️ COHERENCE WARNING

This blend mixes serious business metrics with lighthearted team trivia. The tonal shift might be jarring. Proceed anyway? (Y/N)
```

### Difficulty Re-balancing
Questions are intelligently redistributed:
- Source games may have random difficulty distributions
- Blended game automatically sorts by difficulty
- Ensures natural progression from easy → hard

---

## Use Cases

### Use Case 1: Company Event Mega-Game
**Scenario:** You have separate games for "Company Culture", "Product Knowledge", and "Industry Trends"

**Workflow:**
1. Blend all 3 games at 40/30/30 ratio
2. Title: "Company All-Stars Edition"
3. Result: Comprehensive game covering all aspects

### Use Case 2: Best-Of Compilation
**Scenario:** You created 5 different games over the year and want to pull the best questions

**Workflow:**
1. Pick your top 3 games
2. Blend at equal ratio (33/33/33)
3. During Phase 2 review, swap out any weak questions
4. Result: "Greatest Hits" game

### Use Case 3: Theme Variation
**Scenario:** You have "80s Movies" and "90s Movies" games, want one "80s & 90s Movies" game

**Workflow:**
1. Blend both at 50/50
2. AI detects any overlapping questions (e.g., both mention "The Matrix")
3. Resolve duplicates during Phase 2
4. Result: Comprehensive retro movie game

### Use Case 4: Difficulty Adjustment
**Scenario:** One game is too easy, another is expert-level—you want something in between

**Workflow:**
1. Blend "Easy Company Trivia" + "Expert Product Knowledge"
2. Set ratio: 70% easy, 30% expert
3. AI re-balances difficulty across rounds
4. Result: Moderate difficulty game accessible to all skill levels

---

## Tips for Best Blends

### Choose Compatible Source Games
✅ **Good blends:**
- Games with related themes (e.g., "Marketing Team" + "Marketing Budget")
- Games for the same audience (e.g., both for internal employees)
- Games with similar tone (both serious or both fun)

❌ **Challenging blends:**
- Completely unrelated themes (e.g., "Kids Birthday Party" + "Corporate Budget Training")
- Drastically different tones (e.g., "Silly Office Pranks" + "Cybersecurity Compliance")
- Different audiences (e.g., "Kids Trivia" + "Expert Technical Knowledge")

**Note:** The AI will warn you about tonal clashes, but you can proceed if intentional!

### Specify Your Blend Ratio Thoughtfully
- **Equal blend (50/50 or 33/33/33):** Use when all source games are equally strong
- **Weighted blend (60/40):** Use when one game has better questions or is more relevant
- **Heavily weighted (70/30):** Use when you want to pull just a few questions from a secondary game

### Review Phase 2 Carefully
The Phase 2 preview is your chance to verify:
- ✅ Selected questions match your expectations
- ✅ Difficulty progression feels natural
- ✅ Blend ratio is approximately correct
- ✅ Overlaps are resolved appropriately
- ✅ Theme/title fits the content

Don't skip this step! It's your approval gate before generation.

### Use Refinements to Perfect the Blend
During Phase 3, you can request:
- "Swap Round 2, Q3 for a different question from Game A"
- "Increase the blend to 60/40 instead of 50/50"
- "Replace this question—it's too similar to another one"
- "Move this question to Round 1, it's easier than the others in Round 3"

---

## What the AI Will Deliver

### Final Output Includes:

1. **Complete blended game file** (markdown format)
2. **Validation summary**
   - "3 rounds ✓, 15 questions ✓, 75 answers ✓"
3. **Blend summary**
   - "Blended from [Game A] (8 questions) and [Game B] (7 questions)"
   - "Blend ratio: 53/47 (approximately 50/50 requested)"
4. **Suggested filename**
   - Based on title (e.g., `virtru-blended-edition.md`)
5. **Usage instructions**
   - Where to save, how to load in game

---

## Troubleshooting

### "The blend ratio isn't exactly what I requested"
- Blending isn't always perfectly precise due to question counts
- Example: Requesting 50/50 with 12 total questions might result in 53/47
- The AI will note the actual ratio achieved in the blend summary

### "The AI flagged too many overlaps"
- This is good! Better to catch duplicates than miss them
- You can resolve each one during Phase 2 review
- Choose which version to keep or merge them

### "The blended game doesn't feel coherent"
- Check if source games have compatible themes/tones
- Review the coherence warning if one was issued
- Consider adjusting your source game selection

### "I want to blend more than 3 games"
- The prompt is optimized for 2-3 games maximum
- Blending 4+ games can result in fragmented content
- Alternative: Blend Games A+B first, then blend result with Game C

### "Point values seem off"
- The AI normalizes all points to standard distributions
- Original rankings are preserved (1st answer still highest, etc.)
- If you want specific point values, mention it during Phase 1

---

## Advanced Usage

### Sequential Blending
Create complex blends by chaining multiple blend operations:

1. Blend Game A + Game B → Save as "Blend-AB.md"
2. Blend "Blend-AB.md" + Game C → Save as "Blend-ABC.md"

This gives you more control over multi-game blends.

### Weighted Best-Of
Pull just a few questions from a secondary game:

"Blend 'Company Trivia' (80%) with 'Holiday Special' (20%) to add a few festive questions"

### Theme Expansion
Use blending to expand a theme:

"Blend 'Basic Cybersecurity' with 'Advanced Threats' to create a comprehensive security game"

---

## Quick Reference: When to Use Each Prompt

| Task | Use This Prompt |
|------|----------------|
| Creating a brand new game from scratch | **Game File Generator** |
| Combining 2-3 existing games | **Blend Games** |
| Converting game to host sheet | **Host Sheet Generator** |
| Creating a "best of" compilation | **Blend Games** |
| Expanding a theme with variety | **Blend Games** |
| Adjusting difficulty by mixing games | **Blend Games** |

---

## Complete Workflow Example

**Scenario:** You have two good games and want to create one epic game for your annual company event.

1. **Source games:**
   - `company-culture-2024.md` (13 questions, team-focused)
   - `product-knowledge-2024.md` (15 questions, technical)

2. **Blend the games:**
   - Use Blend Games prompt
   - Paste both game files
   - Choose 50/50 blend ratio
   - Title: "Company All-Stars 2024"
   - Review Phase 2 preview
   - Resolve 2 flagged overlaps (keep product knowledge versions)
   - Approve blend

3. **Save blended game:**
   - Save as: `Game_Questions/company-allstars-2024.md`

4. **Generate host sheet:**
   - Use Host Sheet Generator
   - Choose STANDARD format
   - Save as: `docs/host/HOST_company-allstars-2024.md`

5. **Test and play:**
   - Restart dev server
   - Select "Company Allstars 2024" from dropdown
   - Host the epic game!

---

## See It In Action

The Blend Games prompt follows the same phase-based workflow as the Game Generator and Host Sheet Generator, ensuring a consistent, guided experience every time.

Try blending your existing games and see how the AI intelligently combines them into cohesive, playable games!

---

## Have Fun!

With the Game Generator, Host Sheet Generator, and Blend Games prompt, you have a complete toolkit for creating, combining, and hosting professional Family Feud games. Mix and match your content, create epic compilations, and make your events unforgettable!

Happy blending! 🎮🎉
