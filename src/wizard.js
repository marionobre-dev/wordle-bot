export const STARTER_WORD = "adieu";
import { readFile } from "./utils/fileReader.js";

// const getStartedWord = () => STARTER_WORD;

function getStartedWord() {
  return STARTER_WORD;
}

const colors = ["green", "yellow", "gray"];

class Wizard {
  constructor() {
    this.positionState = {
      char1: null,
      char2: null,
      char3: null,
      char4: null,
      char5: null,
    };

    function setPositionState(char1, char2, char3, char4, char5) {
      this.positionState.char1 = char1;
      this.positionState.char2 = char2;
      this.positionState.char3 = char3;
      this.positionState.char4 = char4;
      this.positionState.char5 = char5;
    }

    function validateWin() {
      const position = this.positionState;

      for (const key in position) {
        if (position[key] !== "green") {
          return false;
        }
      }

      return true;
    }

    function getFileReader() {}
  }
}
