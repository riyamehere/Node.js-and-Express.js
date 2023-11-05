//synchronous approach in file system
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./subfolder/file1.txt", "utf8");
const second = readFileSync("./subfolder/file2.txt", "utf8");

writeFileSync(
  "./subfolder/newfile.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");
