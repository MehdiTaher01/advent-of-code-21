const fs = require("fs");
const binaries = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split(/\n|\r/)
  .filter(Boolean);

const arr = Array(binaries[0].length).fill(0);
for (const binary of binaries) {
  const innerArr = binary.split("");
  for (let i = 0; i < innerArr.length; i++) {
    arr[i] += innerArr[i] == "1";
  }
}
for (let i = 0; i < arr.length; i++) {
  let zeros = binaries.length - arr[i];
  arr[i] = zeros > arr[i] ? "0" : "1";
}
const gamma = parseInt(arr.join(""), 2);
const epsilon = parseInt(arr.map((x) => (x == "1" ? "0" : "1")).join(""), 2);
const powerConsumption = gamma * epsilon;
console.log(powerConsumption);
