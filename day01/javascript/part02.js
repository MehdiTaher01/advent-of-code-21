const fs = require("fs");
const numbers = fs
  .readFileSync("input - 2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => !!x) //Boolean
  .map(Number);

let count = 0;
for (let i = 3; i < numbers.length; i++) {
  const previous = numbers[i - 1] + numbers[i - 2] + numbers[i - 3];
  const current = numbers[i] + numbers[i - 1] + numbers[i - 2];
  count += current > previous;
}
console.log(count); //1158
