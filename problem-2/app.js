//  [Directory Operations]
// Problem 2:- Create a new folder and list all files inside it.

const fs = require("node:fs/promises");

// function for creating files dynamically

async function createFile(directory) {
    const FILE = "file"

    for (let i = 1; i <= 50; i++) {
        const content = `This is the string from ${FILE}-${i}`
        await fs.writeFile(`${directory}/${FILE}-${i}.txt`, content)
    }
}

async function listAllFiles(directory) {
    try {
        const allFiles = await fs.readdir(directory)
        allFiles.sort((a, b) => {
            // sort file based on file number
            const numA = parseInt(a.match(/-(\d+)\.txt$/)[1]);
            const numB = parseInt(b.match(/-(\d+)\.txt$/)[1]);

            return numA - numB;
        });
        console.log("All Files are listed successfully", allFiles)
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    try {
        const directoryPath = "./new-directory"
        await fs.mkdir(directoryPath)
        await createFile(directoryPath)
        console.log("File Created SuccessFully")
        await listAllFiles(directoryPath)
    } catch (error) {
        console.log(error)
    }
})()