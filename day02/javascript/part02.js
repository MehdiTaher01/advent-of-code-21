const fs = require("fs");
const commands = fs
  .readFileSync("input - 2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => !!x); //Boolean

let aim = 0;
let depth = 0,
  horizontal = 0;
let instructions = {
  forward: 1,
  up: -1,
  down: 1,
};
for (const command of commands) {
  const [position, steps] = command.split(" ");
  if (position === "forward") {
    horizontal += instructions[position] * steps;
    depth += aim * instructions[position] * steps;
  } else {
    let mesure = instructions[position] * steps;
    // depth += mesure;
    // aim += position === "up" ? mesure : mesure;
    aim += mesure;
  }
}

const multiplication = depth * horizontal;
console.log(multiplication);
