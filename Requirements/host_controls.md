# Virgil Feud - Host Controls Reference

## Overview

This document outlines the keyboard controls for the host operating Virgil Feud. The host controls all game flow, answer reveals, scoring, and team management through keyboard shortcuts.

## Answer Reveal Controls

| Key | Action |
|-----|--------|
| `1` | Reveal Answer #1 |
| `2` | Reveal Answer #2 |
| `3` | Reveal Answer #3 |
| `4` | Reveal Answer #4 |
| `5` | Reveal Answer #5 |

**Usage:** Press the number key corresponding to the answer position on the board. Once revealed, the answer text and point value will be displayed.

## Strike Management

| Key | Action |
|-----|--------|
| `X` | Add a strike |
| `Backspace` or `Delete` | Remove last strike (undo) |

**Usage:** When a team gives an incorrect answer, press `X` to add a strike. After the 3rd strike, the game automatically switches to the opposing team after a brief animation delay. Use `Backspace` or `Delete` to undo the last strike if added in error.

## Scoring Controls

| Key | Action |
|-----|--------|
| `Spacebar` | Bank points to active team |
| `S` | Steal - award points to opposing team |
| `Tab` | Switch active team |

**Usage:**
- After all answers are revealed or 3 strikes occur, press `Spacebar` to award the current round's points to the active team
- During a steal opportunity, press `S` to award points to the opposing team
- Use `Tab` to manually switch which team is currently playing

## Game Flow Controls

| Key | Action |
|-----|--------|
| `Enter` or `Return` | Advance to next question/round |
| `R` | Reset current question |
| `N` | Skip to next question |
| `Escape` | Toggle host controls visibility |

**Usage:**
- Press `Enter` to advance to the next question or round
- Use `R` to reset the current question if needed (clears strikes, revealed answers, and round points)
- Press `N` to skip the current question entirely and move to the next one
- Hit `Escape` to hide/show the host controls overlay panel

## Face-Off Controls

> **Note:** Face-off system is not currently implemented. The host manually switches teams using the Tab key.

## Quick Reference Card

```
┌─────────────────────────────────────────────┐
│         VIRGIL FEUD HOST CONTROLS           │
├─────────────────────────────────────────────┤
│ ANSWERS:    1-5 = Reveal answer             │
│ STRIKES:    X = Add strike                  │
│             Backspace = Undo strike         │
│ SCORING:    Spacebar = Bank points          │
│             S = Steal                       │
│             Tab = Switch team               │
│ FLOW:       Enter = Next question           │
│             R = Reset question              │
│             N = Skip question               │
│             Esc = Toggle controls           │
└─────────────────────────────────────────────┘
```

## Typical Game Flow

1. **Start Question**: Host determines which team plays first (or use Tab to switch)
2. **Reveal Answers**: Press `1-5` as teams give correct answers
3. **Strikes**: Press `X` when teams give wrong answers
   - After 3rd strike, game auto-switches to opposing team
4. **Bank/Steal**:
   - Press `Spacebar` to bank points to active team
   - Press `S` to award points to opposing team (steal)
5. **Next Question**: Press `Enter` to advance
6. **Repeat** for all 9 questions across 3 rounds

## Tips for Hosts

- Press `Esc` to hide the controls overlay for a cleaner view
- The game will show visual indicators for the current game state
- You can always press `R` to reset if something goes wrong
- Use `N` to skip questions that are problematic
- The active team is highlighted with colored borders
- Strikes shake when added, answers flip when revealed
- Points count up smoothly with animations
- After 3 strikes, the team automatically switches (watch for the animation)

## Animations & Visual Feedback

The game includes several visual effects:
- **Answer Reveal**: Cards flip vertically when revealed
- **Strikes**: X marks shake and rotate when added
- **Points**: Scores count up smoothly instead of jumping
- **Team Switch**: Active team highlights change with scale animation
- **Winner**: Confetti falls on the winner screen
