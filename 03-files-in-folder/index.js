


// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });

const read = require('node:fs/promises');
const testFolder = './03-files-in-folder/secret-folder/';
const path = require("path");
const fs = require('fs');
const stat = require('node:fs');

async function readFile() {
  try {
    const files = await read.readdir(testFolder);
    for (const file of files) {
      fs.stat(`${testFolder}${file}`, (err, stats) => {
        if (stats.isFile()) {
          const fileName = path.basename(file, path.extname(file));
          console.log(`${fileName} - ${path.extname(file).slice(1)} - ${(stats.size / 1024).toFixed(2)}kb` )
        }
      })
    }
  } catch (err) {
    console.error(err);
  }
}

readFile();
