const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "prompt.txt");
const text = fs.readFileSync(filePath, "utf8");

const submission = (text) => {
  const inputs = text.split(/\r?\n/);
  ingredientIds = 0;
  let fresh = 0;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] == "") {
      ingredientIds = i;
      break;
    }
  }

  for (let i = ingredientIds + 1; i < inputs.length; i++) {
    for (let j = 0; j < ingredientIds - 1; j++) {
      const range = inputs[j].split("-");

      if (
        Number(inputs[i]) >= Number(range[0]) &&
        Number(inputs[i]) <= Number(range[1])
      ) {
        fresh++;
        break;
      }
    }
  }

  return fresh;
};

console.log(submission(text));
