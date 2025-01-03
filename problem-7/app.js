// [Copy File Contents]
// problem-7:- Copy the contents of one file into another.

const fs = require("node:fs/promises");

(async()=>{
    try {
        const readPath = await fs.readFile("./read.txt","utf-8")
        await fs.writeFile("./write.txt",readPath);
        console.log("File Copied Successfully");
    } catch (error) {
        console.log(error)
    }
    
})();