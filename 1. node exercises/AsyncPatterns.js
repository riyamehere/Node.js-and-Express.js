const { readFile } = require("fs");
const { resolve } = require("path");

const getText = () => {
  return new Promise((resolve, reject) => {
    //The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
getText("./subfolder/file1.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
