# Host Answer Sheets

Welcome to the host answer sheet directory! This folder contains print-friendly reference sheets that hosts can use during live gameplay.

---

## What Are Host Answer Sheets?

When hosting a Virgil Feud game, you need quick access to all the correct answers and point values. While the raw game markdown files work, they're not optimized for live gameplay:

- ❌ Contains markdown syntax (`##`, `**`, etc.)
- ❌ Formatted for parsing, not for human scanning
- ❌ Hard to read at a glance while managing keyboard controls

**Host answer sheets solve this** by providing clean, print-friendly formats designed for live gameplay.

---

## Three Format Styles

Every game can be converted into three different host sheet formats:

### 🎯 MINIMAL - Ultra-Compact
**File naming:** `HOST_[game-name]_MINIMAL.md`

**Best for:**
- Experienced hosts who know the flow
- One-page reference sheets
- Tight printing constraints

**What you get:**
- Answers on the same line, separated by pipes
- No extra whitespace or tracking elements
- Fits on 1-2 pages

**Example:** See `HOST_virtru-marketing-team_MINIMAL.md`

---

### 📋 STANDARD - Balanced (Recommended)
**File naming:** `HOST_[game-name]_STANDARD.md`

**Best for:**
- Most hosting situations
- First-time and experienced hosts
- Professional look with tracking

**What you get:**
- Clean round separators
- Checkboxes to track completed questions
- Vertical answer layout for easy scanning
- Fits on 2-3 pages

**Example:** See `HOST_virtru-marketing-team_STANDARD.md`

---

### 📖 DETAILED - Training Mode
**File naming:** `HOST_[game-name]_DETAILED.md`

**Best for:**
- New hosts learning the system
- Training sessions or practice runs
- Complex games with lots of context

**What you get:**
- Keyboard control reminders at top
- Strike tracking per question
- Bank/Steal checkboxes
- Point tracking space per round
- Hosting tips at bottom
- Fits on 3-4 pages

**Example:** See `HOST_virtru-marketing-team_DETAILED.md`

---

## How to Generate Host Sheets

You have two options:

### Option 1: Use the AI Generator (Recommended)

1. Open `/prompts/host-sheet-generator.md`
2. Copy the entire prompt into Claude Projects or ChatGPT
3. Paste your game file content
4. Choose a format (Minimal, Standard, or Detailed)
5. Copy the output and save it in `/docs/host/`

**Full instructions:** See [prompts/README.md](../../prompts/README.md) - Part 2: Host Sheet Generator

### Option 2: Manually Format (Not Recommended)

You can manually strip markdown and format the output, but the AI generator is way faster and ensures consistent formatting.

---

## How to Use Host Sheets

### Before the Event:
1. **Generate** your host sheet using the AI prompt
2. **Print** the host sheet (recommended) or keep it on a second screen
3. **Review** the questions and answers before hosting

### During Gameplay:
1. **Keep the sheet next to your keyboard** for quick reference
2. **Check off questions** as you complete them (Standard/Detailed formats)
3. **Scan answers quickly** as teams guess
4. **Press 1-5** when teams guess correctly

### Pro Tips:
- 🖨️ **Print in landscape** if using Minimal format (fits better)
- ✅ **Use checkboxes** to track progress (Standard/Detailed)
- 📝 **Bring a pen** to mark off completed questions
- 💡 **Highlight tricky answers** beforehand if needed
- 🔄 **Generate multiple formats** and pick your favorite

---

## File Naming Convention

All host sheets in this directory follow this pattern:

```
HOST_[game-name]_[FORMAT].md
```

**Examples:**
- `HOST_virtru-marketing-team_MINIMAL.md`
- `HOST_virtru-marketing-team_STANDARD.md`
- `HOST_virtru-marketing-team_DETAILED.md`
- `HOST_christmas-special_STANDARD.md`
- `HOST_company-culture_DETAILED.md`

This makes it easy to:
- Identify which game the sheet is for
- See which format style it uses
- Organize multiple games and formats

---

## Example Files in This Directory

This folder includes three example host sheets generated from `virtru-marketing-team.md`:

- **`HOST_virtru-marketing-team_MINIMAL.md`** - Compact one-page style
- **`HOST_virtru-marketing-team_STANDARD.md`** - Recommended balanced format
- **`HOST_virtru-marketing-team_DETAILED.md`** - Full hosting guide with tips

**Compare all three** to see which format works best for your hosting style!

---

## Quick Reference Table

| Format | Pages | Best For | Includes Checkboxes | Includes Tips | Scannability |
|--------|-------|----------|---------------------|---------------|--------------|
| **MINIMAL** | 1-2 | Experienced hosts | ❌ No | ❌ No | ⭐⭐ Fair |
| **STANDARD** | 2-3 | Most users | ✅ Yes | ❌ No | ⭐⭐⭐ Good |
| **DETAILED** | 3-4 | New hosts | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐ Excellent |

---

## Troubleshooting

### "Which format should I use?"
Start with **STANDARD**. It's the sweet spot between compact and detailed. If you find it too verbose, try MINIMAL. If you want more guidance, try DETAILED.

### "Can I customize the format?"
Yes! When using the AI generator, you can request modifications:
- "Can you make the answers horizontal instead of vertical?"
- "Add space for notes"
- "Skip the checkboxes"

### "I need a host sheet for an existing game"
Use the Host Sheet Generator prompt! Just paste your game file content and pick a format. See [prompts/README.md](../../prompts/README.md) for full instructions.

### "The file has markdown syntax in it"
Host sheets should be clean text with no markdown formatting. If you see `##` or `**` in your host sheet, it wasn't generated correctly. Use the AI generator prompt which automatically strips all markdown.

---

## Additional Resources

- **[prompts/README.md](../../prompts/README.md)** - Full guide to using the AI generators
- **[prompts/host-sheet-generator.md](../../prompts/host-sheet-generator.md)** - The AI system prompt
- **[docs/GAME_RULES_SLIDES.md](../GAME_RULES_SLIDES.md)** - Game rules presentation for players
- **[Game_Questions/README.md](../../Game_Questions/README.md)** - How to create game files

---

## Contributing Host Sheets

If you create host sheets for your custom games and want to share examples:

1. Generate your host sheet using the [AI prompt](../../prompts/host-sheet-generator.md)
2. Save it in this directory with proper naming: `HOST_[game-name]_[FORMAT].md`
3. Test it in a live game
4. Share your feedback!

---

## Have Fun Hosting!

Host sheets make running Virgil Feud games smooth and stress-free. Pick a format, print it out, and focus on what matters: making your event unforgettable!

Questions? Check the [main README](../../README.md) or the [AI Generators Guide](../../prompts/README.md).

🎮 Happy hosting! 🎉
