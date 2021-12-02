const fs = require("fs");
const numbers = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => !!x) //Boolean
  .map(Number);

let count = 0;
for (let i = 1; i < numbers.length; i++) {
  const previous = numbers[i - 1];
  const current = numbers[i];
  count += current > previous;
}
console.log(count); //1184
