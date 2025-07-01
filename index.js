const http = require("http");
const fs_promises = require("fs/promises");
const path = require("path");

const PORT = 3000;

// file path of the html home page
const filePath = path.join(__dirname, "example.html");

const server = http.createServer(async (req, res) => {
  if (req.url == "/home") {
    const homeContent = await fs_promises.readFile("home.html", {
      encoding: "utf-8",
    });
    res.end(homeContent);
  } else if (req.url == "/contact") {
    const contactContent = await fs_promises.readFile("contact.html", {
      encoding: "utf-8",
    });
    res.end(contactContent);
  } else {
    res.end("<h1>No Page Found</h1>");
  }
  // Handling the HTTP method
  //   if (req.method == "GET") {
  //     console.log("request url");
  //     console.log(req.url);
  //     res.end("This is GET method");
  //   } else {
  //     res.end("This is some other method");
  //   }
});

// server is started and listening at PORT 3000
server.listen(PORT, () => {
  console.log("server is started at", PORT);
});
