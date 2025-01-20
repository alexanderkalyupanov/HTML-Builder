const fs = require('fs');
const path = require('path');
const read = require('node:fs/promises');
const testFolder = './04-copy-directory/files/';
const destFolder = path.join(__dirname, "files-copy");

async function copyFile() {
    try {
        const files = await read.readdir(testFolder);
        await fs.promises.mkdir(destFolder, { recursive: true })
        for (const file of files) {
            const srcPath = path.join(testFolder, file);
            const destPath = path.join(destFolder, file);
            await fs.promises.copyFile(srcPath, destPath);
        }
    } catch(error) {
        return console.error(error);
    }

}

copyFile();