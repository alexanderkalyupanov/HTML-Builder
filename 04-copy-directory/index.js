const fs = require('fs');
const path = require('path');


async function copyFile() {
    fs.mkdir(path.join(__dirname, "files-copy"), (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("Create file directory")
    })
}

copyFile();