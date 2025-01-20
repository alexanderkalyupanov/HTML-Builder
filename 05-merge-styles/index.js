const read = require('node:fs/promises');
const folder = './05-merge-styles/styles/';
const path = require("path");
const fs = require('fs');

async function readFile() {
  try {
    const files = await read.readdir(folder);
    fs.writeFile('./05-merge-styles/project-dist/bundle.css/', "", (err) => {
        if (err) throw err;
    });
    for (const file of files) {
        if (path.extname(file) === ".css") {
            const filePath = path.join(folder, file);
            const info = fs.createReadStream(filePath);
            info.on("data", (chunk) => {
                fs.appendFile('./05-merge-styles/project-dist/bundle.css/', chunk.toString(), (err) => {
                    if (err) throw err;
                });
            });
        }
    }
  } catch (err) {
    console.error(err);
  }
}

readFile();