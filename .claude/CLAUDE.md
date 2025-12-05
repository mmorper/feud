# Family Feud Browser Game - Project Context

## About This Project

Virgil Feud is a browser-based Family Feud game application built with React 18 + Vite, Tailwind CSS, and Framer Motion. The game features host-controlled gameplay, keyboard shortcuts, customizable markdown-based question files, and AI-powered content generation tools.

**Key directories:**
- `Game_Questions/` - Markdown game files
- `prompts/` - AI system prompts for content generation
- `Requirements/` - Development planning and task tracking
- `docs/` - Documentation and reference materials
- `src/` - Application source code

**Custom commands available:**
- `/init` - Initialize CLAUDE.md documentation
- `/pr-comments` - Get GitHub PR comments
- `/review` - Complete PR review
- `/security-review` - Security review of pending changes

---

## Project Standards

### 1. System Prompts in `/prompts/`

When creating or modifying system prompts in the `/prompts/` directory:

#### Required Elements - Metadata Header

Every prompt file MUST include a metadata header with:
- **Clear title** - Describes the prompt's purpose
- **Version number** - Track prompt iterations (e.g., "v1.0", "v2.1")
- **Last updated date** - Date of last revision (e.g., "Last Updated: 2025-01-15")
- **Role definition** - "You are an expert [role] specializing in [capability]"
- **Purpose statement** - What the prompt helps users accomplish

**Version and Date Management:**
- **ANY time a prompt is modified**, update BOTH the version number AND the date
- **Minor changes** (typos, clarifications, small tweaks): Increment patch version (e.g., 1.0 → 1.1)
- **Major changes** (new sections, significant rewrites, new features): Increment major version (e.g., 1.5 → 2.0)
- **Date format:** Use YYYY-MM-DD format (e.g., "2025-12-05")

**Example header format:**
```markdown
# [Prompt Name] - System Prompt
**Version:** 1.0
**Last Updated:** 2025-01-15

You are an expert [role] specializing in [specific domain]. Your role is to help users [accomplish what] for [context/application].
```

#### Required Elements - Onboarding Assistance

Every prompt file MUST include a phase-based workflow section that:
- **Guides the user through the process** step-by-step
- **Asks clarifying questions upfront** before generating content
- **Validates inputs** before proceeding to generation
- **Presents drafts for review** before delivering final output

**Reference existing prompts for the pattern:**
- See `prompts/game-generator.md` lines 5-45 for "Your Workflow (Phase-Based Approach)"
- See `prompts/host-sheet-generator.md` lines 9-64 for similar structure

**The pattern must include:**
1. **Phase 1: Discovery/Intake** - Gather requirements from the user
2. **Phase 2: Parsing/Generation** - Create draft content
3. **Phase 3: Refinement** - Allow user to request changes
4. **Phase 4: Validation & Delivery** - Self-validate and present final output

#### Additional Prompt Requirements

- Include a **GOOD vs BAD examples section** showing correct and incorrect usage
- Include **test/validation output section** showing what successful output looks like
- Include **edge case handling** guidance
- Include **validation checklists** for self-verification
- Include **final reminders** section summarizing key principles
- Use clear section headers with `##` and `###` hierarchy
- Keep tone instructive and helpful

**When creating new prompts:**
1. Study the structure of existing prompts in `prompts/game-generator.md` and `prompts/host-sheet-generator.md`
2. Follow the same organizational pattern (metadata → workflow → requirements → validation → examples → edge cases)
3. Ensure the prompt is **self-contained and portable** - it must work independently in Claude Projects, Custom GPTs, or n8n workflows
4. **DO NOT** include dependencies on project-specific files or contexts that won't be available outside this repo
5. If project files are helpful, describe the format inline or instruct the AI to ask the user for examples
6. Test that the prompt guides users through a complete workflow
7. Each prompt can have its own personality and voice based on its purpose

---

### 2. Documentation Standards

#### Future Work Tracking

**All future work MUST be added to `Requirements/todo.md`**

When you identify new tasks, enhancements, or bugs:
1. Add them to the appropriate section in `Requirements/todo.md`
2. Use the existing checkbox format: `- [ ] Task description`
3. Place tasks in the correct phase or category
4. Include enough detail for someone else to understand the task

**Task lifecycle:**
- **New tasks:** Add with `- [ ]` checkbox
- **Completed tasks:** Remove entirely from the list (do not mark as checked)
- Only track pending/in-progress work

**Example:**
```markdown
### Phase 3: Polish & Enhancement

- [ ] Implement flip animation for answer reveals
- [ ] Add shake animation for strikes
- [ ] Add confetti effects for win celebrations
```

#### Documentation Creation & Updates

**When new functionality is completed:**

**What qualifies as "significant" and needs documentation:**
- ✅ **New capabilities** - Features that add functionality users can access
- ❌ **Bug fixes** - Do not create documentation for bug fixes
- ❓ **When in doubt** - Stop and ask, offering a recommendation

**Documentation placement:**
- **README.md** - High-level overview, getting started, key features
- **`/docs/`** - Detailed guides, technical references, in-depth instructions

1. **Update existing documentation** if the feature relates to documented behavior
   - Check `/docs/` for related files
   - Check `README.md` for feature lists or instructions
   - Update the relevant sections to reflect new behavior

2. **Create new documentation** if needed for significant features
   - **Location:** Place documentation in the appropriate directory:
     - Game rules/usage → `/docs/`
     - Development planning → `/Requirements/`
     - AI prompt guides → `/prompts/`
     - Host reference materials → `/docs/host/`

3. **Match tone and style** of existing documentation:
   - **README.md style:** Conversational, friendly, approachable, humorous (written for non-technical users - "We Googled what these were")
   - **`/docs/` style:** Clear, instructional, example-driven
   - **`/prompts/` style:** Structured, phase-based, with validation checklists
   - **`Requirements/todo.md` style:** Checkbox-based task lists with status indicators

4. **Study similar documentation first:**
   - Read existing docs in the same directory
   - Match formatting conventions (headers, lists, code blocks)
   - Use similar structure and organization patterns
   - Maintain consistent voice (technical vs. casual vs. instructional)
   - **For README.md:** Match the existing humor and casual tone

#### When in Doubt - Ask for Clarification

**Clarification protocol: STOP and ASK, but always offer a recommendation**

**If any of the following are unclear, STOP and ask the user:**
- Where documentation should be placed
- What tone/style to use
- Whether to create new docs or update existing ones
- Which sections of existing docs need updates
- Whether a feature is significant enough to warrant documentation

**When asking, always provide:**
1. Your recommended approach
2. Reasoning for the recommendation
3. Alternative options if applicable

**Example questions to ask:**
- "This feature adds keyboard shortcuts - I recommend adding it to the README 'How to Host a Game' section to match the existing controls documentation. Alternatively, we could create a separate `/docs/keyboard-shortcuts.md` if you want more detail. Which do you prefer?"
- "This looks like a new capability (adding game themes) - I recommend documenting it. Should I add this to the main README or create a separate doc in `/docs/`?"
- "This feature impacts the game flow - I recommend updating `docs/GAME_RULES_SLIDES.md`. Does that sound right?"

**Learning together:**
- If your recommendation isn't quite right, we'll adjust the standards together
- Note patterns that emerge for future reference

---

## Working With This Project

### Code Review & Quality

When reviewing code or creating PRs:
- Use `/review` for general code review
- Use `/security-review` for security-focused analysis
- Reference existing game files in `/Game_Questions/` for consistency

### Game File Format

- Game files are markdown-based, stored in `Game_Questions/`
- Parser expects strict format (see `prompts/format-reference.md`)
- Use AI generators in `/prompts/` for creating compliant files
- Reference `Game_Questions/sample.md` for format examples

### Tech Stack Context

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion
- **No backend** - everything runs client-side
- **Build command:** `npm run dev` (development), `npm run build` (production)
- **Hot reload:** Vite handles automatic updates during development

---

## Quick Reference Links

- Game format guide: `docs/GAME_FILE_FORMAT.md`
- AI prompt setup: `prompts/README.md`
- Development tasks: `Requirements/todo.md`
- Host answer sheet examples: `docs/host/`
- Sound effects guide: `public/sounds/README.md`

---

## Notes

- This project was built by marketers learning to code - documentation is conversational and beginner-friendly
- AI-powered content generation is a core feature (prompts in `/prompts/`)
- Keep changes focused and avoid over-engineering
- Test game files by restarting the dev server after adding new `.md` files
