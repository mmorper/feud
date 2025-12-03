# Family Feud Browser Game - Development Tasks

## 1. Game Requirements & Core Mechanics

- [x] Game mode: Host-controlled with two teams (always)
- [x] Round structure: 3 regular rounds (3 questions each) + Fast Money bonus (3 questions, 2 players)
- [x] Scoring rules: Points based on survey answers from markdown files
- [x] Win conditions: First to 500 points or highest after all rounds

## 2. Technical Architecture

- [x] Must run in web browser locally (no backend required)
- [x] No backend or server needed
- [x] Questions stored in markdown files in `Game_Questions/` folder
- [x] Choose frontend framework: React 18 with Vite
- [x] Set up state management system (React useState/hooks)
- [x] Markdown file parser created (questionParser.js)
- [x] Implement file loading system for markdown files (using Vite ?raw imports)
- [x] Create game file selector (dropdown in main menu)
- [x] Configure Tailwind CSS for styling
- [x] Configure Framer Motion for animations
- [x] Set up project build system (Vite)

## 3. Data Model

- [x] Question structure: Survey question text from markdown files
- [x] Answer structure: Text + point value (included in markdown)
- [x] Variable answers per question (2-5 answers maximum)
- [x] Point values explicitly defined in markdown files
- [x] Parse markdown format into game data structure (parser logic complete)
- [x] Validate question/answer data on load (validation function created)
- [x] Import markdown files at build time using Vite ?raw imports
- [x] Connect parsed data to game components (GameBoard receives gameData)

## 4. UI/UX Design

- [x] Design main menu (start game, settings with game file selector)
- [x] Design team setup screen (team names only, 2 teams)
- [x] Design game board (answer board with flippable tiles for up to 5 answers)
- [ ] Design face-off screen (buzzer round interface)
- [x] Design score display (current points for both teams)
- [ ] Design Fast Money round interface (2 players, 3 questions)
- [x] Design game over screen (winner announcement, play again)
- [x] Design host control panel overlay (keyboard shortcuts reference - static display)
- [ ] Create settings/pause menu (ESC key)
- [ ] Add game file selector to settings menu

## 5. Game Board & Answer Reveal

- [x] Wire up number keys 1-5 to reveal corresponding answers
- [x] Implement animated color change for revealed answers
- [x] Display answer text + point value (fully functional)
- [x] Update answer state when revealed
- [x] Add revealed answer points to round total
- [x] Show count of remaining hidden answers
- [ ] Add sound effect on answer reveal (Phase 3)
- [x] Add visual feedback for correct answers (gold background)

## 6. Scoring & Team Management

- [x] Track scores for Team 1 and Team 2 (fully functional)
- [x] Track current round points (before banking) (fully functional)
- [x] Wire up Spacebar to bank points to active team
- [x] Wire up S key to steal points to opposing team
- [x] Clear round points after banking/stealing
- [x] Wire up Tab key to switch active team manually
- [x] Add team turn indicators (visual highlighting complete)
- [x] Check for win condition (500 points or end of rounds)
- [x] Trigger game over when win condition met

## 7. Buzzer/Face-Off System

- [ ] Create face-off component/screen
- [ ] Wire up Q key for Team 1 buzzer
- [ ] Wire up P key for Team 2 buzzer
- [ ] Add timer for buzz-in period (optional)
- [ ] Create visual indicator for who buzzed first
- [ ] Determine which team controls the board
- [ ] Allow option for winning team to play or pass
- [ ] Transition from face-off to main game

## 8. Strike System & Round Logic

- [x] Track strikes (fully functional)
- [x] Create visual strike indicators (X marks with animations)
- [x] Wire up X key to add a strike
- [x] Wire up Backspace/Delete to remove last strike
- [ ] Add sound effect for strike (Phase 3)
- [ ] After 3 strikes, offer steal opportunity to other team (manual control via S key)
- [x] Wire up Enter key to advance to next question
- [x] Implement round progression logic (move through questions)
- [x] Transition between rounds (Round 1 → 2 → 3)
- [x] Wire up R key to reset current question
- [x] Wire up N key to skip to next question
- [x] Reset strikes when moving to new question

## 9. Audio & Visual Polish

- [x] Create animations framework (Framer Motion configured)
- [x] Basic animations (fade in, scale) implemented
- [ ] Implement flip animation for answer reveals
- [ ] Add shake animation for strikes
- [ ] Add counting animation for points
- [ ] Source sound effect files (correct.mp3, wrong.mp3, applause.mp3)
- [ ] Create sound utility/hook for playing audio
- [ ] Wire up sound effects to game events
- [ ] Add background music (optional)
- [ ] Implement confetti/celebration effects for wins
- [ ] Add transition animations between screens

## 10. Question Management

- [x] Parser logic created (questionParser.js)
- [x] Implement file system access (using Vite ?raw imports)
- [x] List available game files (getAvailableGames function)
- [x] Load markdown content from selected file
- [x] Parse loaded markdown into game data structure
- [x] Pass parsed game data to GameBoard component
- [x] Handle file loading errors gracefully (error display in TeamSetup)
- [x] Validation runs on load to ensure data integrity

## 11. Host Controls

**Keyboard Layout:**

- [x] Keyboard event listener framework set up
- [x] Number keys 1-5: Reveal corresponding answer (WORKING)
- [x] X key: Add a strike (WORKING)
- [x] Backspace/Delete: Remove last strike (WORKING)
- [x] Spacebar: Bank current points to active team (WORKING)
- [x] S key: Steal - award points to opposing team (WORKING)
- [x] Tab: Switch active team (WORKING)
- [x] Enter/Return: Advance to next round/phase (WORKING)
- [x] R key: Reset current round (WORKING)
- [x] N key: Skip to next question (WORKING)
- [ ] Q key: Team 1 buzzed in - face-off (Phase 2)
- [ ] P key: Team 2 buzzed in - face-off (Phase 2)
- [ ] Escape: Pause/Menu (Phase 2)

## 12. Testing & Balancing

- [ ] Test all keyboard controls work as expected
- [ ] Playtest complete game flow (menu → setup → game → end)
- [ ] Test answer reveal animations
- [ ] Test strike system and steal mechanics
- [ ] Test round progression through all 3 rounds
- [ ] Test Fast Money round
- [ ] Test win conditions (500 points and end of rounds)
- [ ] Ensure questions are fair and varied
- [ ] Test UI on desktop (primary focus)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check for memory leaks or performance issues
- [ ] Verify all sound effects play correctly
- [ ] Test edge cases (all answers revealed, maximum strikes, etc.)

## 13. Fast Money Round

- [ ] Create Fast Money component/screen
- [ ] Display Fast Money questions (3 questions)
- [ ] Implement Player 1 turn (3 questions)
- [ ] Hide Player 1's answers during Player 2's turn
- [ ] Implement Player 2 turn (same 3 questions)
- [ ] Reveal Player 1's answers during Player 2's turn
- [ ] Calculate total Fast Money points
- [ ] Award Fast Money points to winning team
- [ ] Add Fast Money scoring display
- [ ] Add timer for each player (optional)
- [ ] Transition from Round 3 to Fast Money
- [ ] Transition from Fast Money to Game Over

## 14. Responsive Design

- [x] Desktop layout optimized (primary platform)
- [ ] Support landscape/portrait orientations for tablets
- [x] Add accessibility features (keyboard navigation for host controls)
- [ ] Test on various screen sizes (1080p, 1440p, 4K)
- [ ] Ensure text is readable at all sizes
- [ ] Verify animations perform well on lower-end devices

---

## Development Priority Order

### ✅ Phase 1: Core Gameplay (MVP) - **COMPLETED**

1. ✅ Load markdown files and connect to game data
2. ✅ Implement answer reveal (number keys 1-5)
3. ✅ Implement strike system (X key)
4. ✅ Implement point banking (Spacebar)
5. ✅ Implement round progression (Enter key)

**The game is now fully playable with all core features working!**

### Phase 2: Full Game Flow (Future Enhancement)

1. Implement face-off system (Q/P keys) - Interactive face-off at question start
2. ✅ Implement steal mechanic (S key) - **COMPLETED**
3. ✅ Add win condition checking - **COMPLETED**
4. Create Fast Money round component
5. Add pause/settings menu (ESC key)

### Phase 3: Polish & Enhancement

1. Add sound effects
2. Improve animations (flip, shake, counting)
3. Add confetti effects
4. Testing and bug fixes
5. Performance optimization

---

## Confirmed Decisions

### Game Mode

- Host-controlled gameplay
- Always two teams competing
- Local browser-based (no network/backend)

### Question Source

- Markdown files stored in `Game_Questions/` folder
- Host selects game file from BOTH main menu AND settings (flexible access)
- Questions include explicit point values
- Variable answers per question (2-5 maximum)
- See `Game_Questions/sample.md` for format reference

### Round Structure

- Round 1: 3 questions
- Round 2: 3 questions
- Round 3: 3 questions
- Fast Money: 3 questions, 2 players

### Scoring

- First to 500 points wins
- If no team reaches 500, highest score after all rounds wins

### Host Controls

- Keyboard-driven interface (see section 11 for complete layout)
- Visual control panel overlay showing available shortcuts
