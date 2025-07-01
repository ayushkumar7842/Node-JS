const fs_promises = require("fs/promises");

const path = require("path");

const filePath = path.join(__dirname, "index.html");

fs_promises
  .readFile(filePath, { encoding: "utf-8" })
  .then((data) => {
    // console.log(data);
    return fs_promises.writeFile("example.html", data);
  })
  .then(() => {
    console.log("File is written successfully");
  })
  .catch((err) => {
    console.log("Error while reading the file", err);
  });
