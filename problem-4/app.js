// [File Deletion]
// problem-4:- Delete a file if it exists.

const fs = require("node:fs/promises");

(async()=>{
    try {
        const FILE = "./hello.txt";

        await fs.access(FILE);
        
        await fs.rm(FILE);
        console.log("File deleted successfully");
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log("File doesn't exist!");
        } else {
            console.log("Error:", error.message);
        }
    }
})()