const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("<h1>Hello World</h1>");
});

// server is started and listening at PORT 3000
server.listen(PORT, () => {
  console.log("server is started at", PORT);
});
