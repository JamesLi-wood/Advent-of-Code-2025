const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "prompt.txt");
const text = fs.readFileSync(filePath, "utf8");

const submission = (text) => {
  const matrix = text
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => [...line]);
  let count = 0;

  const recurse = (path, pos) => {
    if (pos < 0 || pos > matrix[0].length) return;
    if (!matrix[path] || !matrix[path + 1]) return;
    if (matrix[path][pos] == "X") return;

    if (matrix[path][pos] == "^") {
      matrix[path][pos] = "X";
      count++;
      recurse(path + 1, pos - 1);
      recurse(path + 1, pos + 1);
    } else {
      recurse(path + 1, pos);
    }
  };

  let startingPos = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == "S") startingPos = i;
  }

  recurse(1, startingPos);

  return count;
};

console.log(submission(text));
