const path = require("path");
const fs = require("fs");

const readFile = fs.createReadStream(path.join(__dirname, "text.txt"), "utf-8");
readFile.on("data", (chunk) => console.log(chunk))
