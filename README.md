# Wordle Bot Exercise

This project is a coding exercise to build a bot that opens Wordle and solves the daily puzzle automatically.

## Goal

Create a program that:
- launches the Wordle website in a browser,
- reads the current game state,
- makes educated guesses based on Wordle rules,
- continues until the puzzle is solved or the allowed attempts are exhausted.

## Wordle Rules

Wordle is a word-guessing game where the player tries to guess a hidden five-letter word.

- The secret word has exactly five letters.
- Each guess must also be a valid five-letter word.
- After each guess, the game gives feedback for each letter:
  - Green: the letter is in the correct position.
  - Yellow: the letter is in the word but in a different position.
  - Gray: the letter is not in the word.
- Letters can repeat, and the feedback must be interpreted accordingly.
- The player has a limited number of attempts to guess the secret word.
- The goal is to identify the hidden word using the clues from previous guesses.

## Exercise Expectations

Your bot should use the Wordle rules to reason through possible words and narrow the search space with each guess. The focus is on building a working solver, not just a static script.

## Notes

This project is intended as a browser automation and logic challenge. You can use Playwright to interact with the site and implement the solving strategy in code.
