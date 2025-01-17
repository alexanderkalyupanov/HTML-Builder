const path = require("path");
const fs = require("fs");
const EventEmitter = require("events");
const { stdout, stdin} = process;
const emitter = new EventEmitter();

fs.writeFile("02-write-file/text.txt", "", function (err) {
    if (err) {
        return err;
    }
    console.log("Введите текст...");
});

stdin.on("data", (data) => {
    const input = data.toString();
    fs.appendFile("02-write-file/text.txt", input, function (err) {
        if (err) {
            return err;
        }
    })
    if (input.trim() === "exit") {
        process.on("exit", () => stdout.write("Good bye!"));
        process.exit();
    }
});

