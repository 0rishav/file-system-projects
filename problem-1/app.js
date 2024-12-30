// [Basic File Operation]
// Problem 1:-  Create a file, write some text into it, and read it back.

const fs = require("node:fs/promises");

(async () => {
    try {
        await fs.writeFile("text.txt", "This is some string");

        const fileRead = await fs.readFile("./text.txt", "utf-8");
        console.log(fileRead);
    } catch (err) {
        console.error("Error:", err.message);
    }
})();
