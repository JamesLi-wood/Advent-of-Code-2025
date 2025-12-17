const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "prompt.txt");
const text = fs.readFileSync(filePath, "utf8");

const submission = (text) => {
  const lines = text.split(/\r?\n/);

  let access = 0;

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      let adjacentPaper = 0;
      if (lines[i][j] == ".") continue;
      if (lines[i][j - 1] == "@") adjacentPaper++;
      if (lines[i][j + 1] == "@") adjacentPaper++;
      if (lines[i - 1]?.[j] == "@") adjacentPaper++;
      if (lines[i + 1]?.[j] == "@") adjacentPaper++;
      if (lines[i - 1]?.[j - 1] == "@") adjacentPaper++;
      if (lines[i - 1]?.[j + 1] == "@") adjacentPaper++;
      if (lines[i + 1]?.[j + 1] == "@") adjacentPaper++;
      if (lines[i + 1]?.[j - 1] == "@") adjacentPaper++;
      if (adjacentPaper < 4) access++;
    }
  }

  return access;
};

console.log(submission(text));
