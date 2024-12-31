// [File Rename]
// Q.3 Rename a file with a new name using FS module.

const fs = require("node:fs/promises");
const readline = require('node:readline/promises'); 


async function renameFile(oldPath,newPath){
    try {
        await fs.rename(oldPath,newPath)
    } catch (error) {
        console.log(error)
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  

(async () => {
    try {
      const name = await rl.question("Enter the File Name for create! ");
      
      await fs.writeFile(name,"This is creating file")
      
      const rename = await rl.question("Enter Your file for rename? ");
      await renameFile(name,rename)
      
      rl.close();
    } catch (err) {
      console.error('Error:', err);
      rl.close(); 
    }
  })();
 