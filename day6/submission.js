const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "prompt.txt");
const text = fs.readFileSync(filePath, "utf8");

const submission = (text) => {
  const matrix = text
    .trim()
    .split(/\r?\n/)
    .map((row) => row.trim().split(/\s+/));

  let result = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    const operation = matrix[matrix.length - 1][i];
    let total = operation == "+" ? 0 : 1;

    for (let j = 0; j < matrix.length - 1; j++) {
      if (operation == "+") total += Number(matrix[j][i]);
      else total *= Number(matrix[j][i]);
    }

    result += total;
  }

  return result;
};

console.log(submission(text));
