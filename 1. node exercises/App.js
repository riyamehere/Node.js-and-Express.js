const { readFileSync, writeFileSync } = require("fs");

first = readFileSync("./subfolder/file1.txt", "utf-8");
second = readFileSync("./subfolder/file2.txt", "utf-8");

writeFileSync(
  //write eill also create a file from scratch if not already present
  "./subfolder/newfile.txt",
  ` here is the result of ${first} ${second}`,
  { flag: "a" } //this command will simply append to the file, add  up to the content which is already there in file
);
