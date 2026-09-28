import fileReader from "./fileReader.js";

export const wordleReader = () => {
  const filePath = "resources/valid-wordle-words.txt";
  const fileReader = new fileReader(filePath);
  return fileReader.read();
};
