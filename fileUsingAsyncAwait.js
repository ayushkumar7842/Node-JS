const fs = require("fs/promises");
const path = require("path");

const outputFilePath = path.join(__dirname, "example.html");
const inputFilePath = path.join(__dirname, "index.html");

async function readAndWriteFile() {
  try {
    // read the file
    const data = await fs.readFile(inputFilePath, { encoding: "utf-8" });

    // Now write the data
    await fs.writeFile(outputFilePath, data);

    console.log("File is written successfully");
  } catch (error) {
    console.log("Error While Handling file", error);
  }
}

readAndWriteFile();
