const http = require("http");
const fs_promises = require("fs/promises");
const path = require("path");

const PORT = 3000;

// file path of the html home page
const filePath = path.join(__dirname, "example.html");

const server = http.createServer(async (req, res) => {
  const content = await fs_promises.readFile(filePath, { encoding: "utf-8" });
  res.end(content);
});

// server is started and listening at PORT 3000
server.listen(PORT, () => {
  console.log("server is started at", PORT);
});
