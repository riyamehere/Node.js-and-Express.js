const { readFile, writeFile } = require("fs").promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile("./subfolder/file1.txt", "utf8");
    const second = await readFile("./subfolder/file2.txt", "utf8");
    await writeFile(
      "./subfolder/newfile.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
