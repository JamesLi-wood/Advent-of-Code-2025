const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "prompt.txt");
const text = fs.readFileSync(filePath, "utf8");

const submission = (text) => {
  const ids = text.split(",");
  let invalid = 0;

  ids.forEach((id) => {
    const splitId = id.split("-");

    for (let i = Number(splitId[0]); i <= Number(splitId[1]); i++) {
      const length = String(i).length;
      if (length % 2 !== 0) continue;

      const leftSide = Math.floor(i / Math.pow(10, length / 2));
      const rightSide = i % Math.pow(10, length / 2);

      if (leftSide == rightSide) invalid += i;
    }
  });

  return invalid;
};

console.log(submission(text));
