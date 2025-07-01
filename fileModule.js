const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "index.html");
// reading a file synchronously

// const data = fs.readFileSync(filePath, { encoding: "utf8" });
// console.log(data);

// reading the file asyncronously
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // the file data
  // console.log(data.toString());

  // write the data
  fs.writeFile("example.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("File is written successfully");
  });
});

console.log("Last Line");
