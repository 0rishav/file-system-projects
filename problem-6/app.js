// [Search for a Word]
// problem-6:- Search for a specific word inside a file and count its occurrences.

const fs = require("node:fs/promises");
const readline = require("node:readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function wordOccurence(sentence, word) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === word) count++
    }
    return count;
}

(async () => {
    try {
        const fileOpen = await fs.readFile("text.txt", "utf-8")
        const readFile = fileOpen.replace(/,/g, "").split(" ");
        const word = await rl.question("Please Enter Your word ")
        const numberOfWords = await wordOccurence(readFile, word)
        console.log(`${word} occurence is:`,numberOfWords)
    } catch (error) {
        console.log(error)
    }finally{
        rl.close()
    }
})()
