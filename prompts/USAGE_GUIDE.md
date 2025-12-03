# How to Use the Game File Generator Prompt

This guide explains how to use the system prompt to generate compliant Family Feud game files.

## Setup

### For Claude Projects
1. Go to [claude.ai/projects](https://claude.ai/projects)
2. Create a new project (or open existing one)
3. Click "Set custom instructions"
4. Copy the entire contents of `game-file-generator-prompt.md`
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

## How to Use the Generator

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
- **3 regular rounds** (9 questions total)
- **Fast Money round** (3 questions) - **Required but not yet playable**
- **2-5 answers per question**
- **Point values for each answer**

**Note:** All game files must include Fast Money questions for the parser to accept them, even though Fast Money gameplay is not yet implemented. The AI generator handles this automatically.

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
2. Review the `Game_Questions/README.md` for format requirements
3. Compare your generated file to `Game_Questions/sample.md`
4. Verify the prompt is loaded correctly in your AI interface

---

## Have Fun!

This prompt is designed to make creating Family Feud games easy and enjoyable. The AI will guide you through the process, ensure compliance, and help you create engaging content for your players.

Happy game creating! 🎮
