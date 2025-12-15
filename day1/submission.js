const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "prompt.txt");
const text = fs.readFileSync(filePath, "utf8");

const submission = (text) => {
  const lines = text.split(/\r?\n/);

  let result = 0;
  let dialValue = 50;

  lines.forEach((line) => {
    const dialShift = line[0] == "L" ? -1 : 1;
    const number = line.slice(1) * dialShift;
    dialValue += number;

    if (dialValue % 100 == 0) result++;
  });

  return result;
};

console.log(submission(text));
