# Family Feud Format Quick Reference

Fast reference for creating compliant game markdown files.

---

## Required Structure

| Component | Requirement |
|-----------|-------------|
| **Rounds** | Exactly 3 (`## Round 1`, `## Round 2`, `## Round 3`) |
| **Questions per Round** | 4-5 per round recommended (12-15 total); 3 per round supported for backwards compatibility |
| **Fast Money** | Exactly 3 questions (`## Fast Money Round`) - REQUIRED but not yet playable |
| **Answers per Question** | 2-5 answers |
| **Point Values** | Integer (no decimals), typically total ~100 |

**⚠️ Important:** Fast Money Round must be included in all game files for the parser to accept them, even though Fast Money gameplay is not yet implemented in the game.

**💡 Why 4-5 questions?** With 500 points needed to win and ~100 points per question, having 12-15 questions ensures games reach a conclusion even when teams only reveal partial answers.

---

## Exact Format Template

```markdown
## Round 1

### Question 1
**Survey Says: [Your question here]**

1. Answer Text - 45
2. Answer Text - 30
3. Answer Text - 15
4. Answer Text - 7
5. Answer Text - 3

### Question 2
**Survey Says: [Your question here]**

1. Answer Text - 42
2. Answer Text - 28
3. Answer Text - 18
4. Answer Text - 8
5. Answer Text - 4

### Question 3
**Survey Says: [Your question here]**

1. Answer Text - 40
2. Answer Text - 30
3. Answer Text - 20
4. Answer Text - 7
5. Answer Text - 3

### Question 4
**Survey Says: [Your question here]**

1. Answer Text - 41
2. Answer Text - 27
3. Answer Text - 16
4. Answer Text - 10
5. Answer Text - 6

### Question 5
**Survey Says: [Your question here]**

1. Answer Text - 38
2. Answer Text - 26
3. Answer Text - 17
4. Answer Text - 11
5. Answer Text - 8

## Round 2

### Question 1
**Survey Says: [Your question here]**

[Same format as Round 1]

### Question 2
[...]

### Question 3
[...]

### Question 4
[...]

### Question 5
[...]

## Round 3

### Question 1
[Same format]

### Question 2
[...]

### Question 3
[...]

### Question 4
[...]

### Question 5
[...]

## Fast Money Round

### Question 1
**Name something [you do/see/etc]**

1. Answer Text - 40
2. Answer Text - 30
3. Answer Text - 20
4. Answer Text - 7
5. Answer Text - 3

### Question 2
[Same format]

### Question 3
[Same format]
```

---

## Critical Parsing Rules

✅ **DO:**
- Use `**Survey Says:**` or `**Name**` (in bold) for questions
- Format answers: `1. Text - 45` (space-hyphen-space)
- Use exact round headers: `## Round 1`, `## Round 2`, `## Round 3`, `## Fast Money Round`
- Use `### Question 1`, `### Question 2`, etc.
- Keep point values as integers

❌ **DON'T:**
- Use plain text questions (must be bold with `**`)
- Use wrong answer format like `Text: 45 points` or `Text (45)`
- Add extra blank lines between answers
- Use decimal point values
- Misspell round headers

---

## Point Distribution Examples

### Steep Drop-off
```
1. Most Popular - 45
2. Second Choice - 30
3. Third Choice - 15
4. Less Common - 7
5. Rare Answer - 3
```

### Gradual Distribution
```
1. Top Answer - 38
2. Second Answer - 26
3. Third Answer - 15
4. Fourth Answer - 12
5. Fifth Answer - 9
```

### Top-Heavy
```
1. Dominant Answer - 50
2. Second Place - 25
3. Third Place - 13
4. Fourth Place - 8
5. Fifth Place - 4
```

---

## Question Style Guide

### Survey-Style (Correct)
- Name something you take to the beach
- Name a popular pizza topping
- Name something people do when they can't sleep
- Name a reason you might be late to work

### Trivia-Style (Incorrect)
- ❌ What year was the beach invented?
- ❌ Who created the first pizza?
- ❌ How many hours of sleep do doctors recommend?
- ❌ What is the legal excuse for tardiness?

---

## Validation Checklist

Before saving your file:

- [ ] File has exactly 3 rounds labeled `## Round 1`, `## Round 2`, `## Round 3`
- [ ] Each round has 4-5 questions (3 questions supported for legacy files)
- [ ] File has `## Fast Money Round` with exactly 3 questions
- [ ] Total questions: 15-18 recommended (12-15 regular + 3 Fast Money)
- [ ] Every question has 2-5 answers
- [ ] Every answer follows format: `1. Text - Number`
- [ ] All questions are bold: `**Question Text**`
- [ ] All point values are integers (no decimals)
- [ ] Questions are survey-style, not trivia
- [ ] File saved as `.md` in `Game_Questions/` folder

---

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| "Question not found" | Question text not bold | Add `**` around question: `**Survey Says: Text**` |
| "Invalid answer format" | Wrong syntax | Use: `1. Answer - 45` (space-hyphen-space) |
| "Wrong number of questions" | Missing/extra questions | Ensure exactly 3 per round |
| "Round not detected" | Misspelled header | Use exact text: `## Round 1` |
| "No Fast Money questions" | Wrong header | Use: `## Fast Money Round` |

---

## File Naming Convention

| Filename | Display Name |
|----------|--------------|
| `sample.md` | "Sample" |
| `christmas-edition.md` | "Christmas Edition" |
| `80s-trivia.md` | "80s Trivia" |
| `family_friendly.md` | "Family Friendly" |

Use lowercase with hyphens (`-`) or underscores (`_`) to separate words.

---

## Complete Minimal Example

```markdown
# Family Feud Game - Example

## Round 1

### Question 1
**Survey Says: Name a fruit**

1. Apple - 45
2. Banana - 30
3. Orange - 15
4. Grape - 7
5. Strawberry - 3

### Question 2
**Survey Says: Name a color**

1. Red - 40
2. Blue - 30
3. Green - 20
4. Yellow - 7
5. Black - 3

### Question 3
**Survey Says: Name a day of the week**

1. Friday - 42
2. Saturday - 28
3. Sunday - 18
4. Monday - 8
5. Wednesday - 4

## Round 2

### Question 1
**Survey Says: Name something hot**

1. Fire - 45
2. Sun - 30
3. Coffee - 15
4. Oven - 7
5. Summer - 3

### Question 2
**Survey Says: Name a pet**

1. Dog - 50
2. Cat - 35
3. Fish - 10
4. Bird - 3
5. Hamster - 2

### Question 3
**Survey Says: Name a sport**

1. Football - 40
2. Basketball - 28
3. Baseball - 17
4. Soccer - 10
5. Tennis - 5

## Round 3

### Question 1
**Survey Says: Name something cold**

1. Ice - 42
2. Snow - 28
3. Ice Cream - 16
4. Winter - 9
5. Freezer - 5

### Question 2
**Survey Says: Name a vehicle**

1. Car - 45
2. Truck - 25
3. Motorcycle - 15
4. Bicycle - 10
5. Bus - 5

### Question 3
**Survey Says: Name a holiday**

1. Christmas - 50
2. Thanksgiving - 25
3. Halloween - 13
4. Easter - 8
5. Fourth of July - 4

## Fast Money Round

### Question 1
**Name an animal**

1. Dog - 40
2. Cat - 30
3. Lion - 20
4. Elephant - 7
5. Monkey - 3

### Question 2
**Name a number between 1 and 10**

1. Seven - 35
2. Five - 28
3. Three - 18
4. Ten - 12
5. One - 7

### Question 3
**Name a piece of furniture**

1. Chair - 38
2. Table - 28
3. Couch - 18
4. Bed - 11
5. Desk - 5
```

---

## Need Help?

- **Full Documentation:** See `docs/GAME_FILE_FORMAT.md`
- **Sample Game:** See `Game_Questions/sample.md`
- **System Prompt:** See `prompts/game-generator.md`
- **Usage Guide:** See `prompts/README.md`
