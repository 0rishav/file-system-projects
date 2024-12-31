// [Check File or Directory]
// problem-5:- Verify whether a path is a file or a directory.

const fs = require("node:fs/promises");
const readline = require("node:readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function FileOrDirectory(pathName) {
    try {
        const stats = await fs.lstat(pathName); 
        if (stats.isFile()) {
            console.log(`${pathName} is a file.`);
        } else if (stats.isDirectory()) {
            console.log(`${pathName} is a directory.`);
        }
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    try {
        const path = await rl.question("Enter your file or directory: ");
        await FileOrDirectory(path);
    } catch (error) {
        console.log(error.message);
    } finally {
        rl.close(); 
    }
})();

