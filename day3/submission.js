const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "prompt.txt");
const text = fs.readFileSync(filePath, "utf8");

const submission = (text) => {
  const lines = text.split(/\r?\n/);
  let result = 0;

  lines.forEach((line) => {
    let left = Number(line[0]);
    let max = 0;

    for (let i = 1; i < line.length; i++) {
      const value = left * 10 + Number(line[i]);

      if (Number(line[i]) > left) left = Number(line[i]);
      if (value > max) max = value;
    }

    result += max;
  });

  return result;
};

console.log(submission(text));
