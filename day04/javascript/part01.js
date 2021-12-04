const fs = require("fs");
let [subsystem, ...lines] = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split(/\n|\r/)
  .filter(Boolean);

subsystem = subsystem.split(",").filter(Boolean).map(Number);
console.log(subsystem);

const boards = [];
lines.forEach((line, i) => {
  const arr = line.split(/\s+/).filter(Boolean).map(Number);
  if (i % 5 == 0) boards.push([]);
  boards[boards.length - 1].push(arr);
});
console.log(boards);
