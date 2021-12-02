const fs = require("fs");
const commands = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => !!x); //Boolean

let depth = 0,
  horizontal = 0;
let instructions = {
  forward: 1,
  up: -1,
  down: 1,
};
for (const command of commands) {
  const [position, steps] = command.split(" ");
  if (position === "forward") horizontal += instructions[position] * steps;
  else {
    depth += instructions[position] * steps;
  }
}

const multiplication = depth * horizontal;
console.log(multiplication);
