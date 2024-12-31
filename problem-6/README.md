# Problem 6: Search for a specific word inside a file and count its occurrences.

## Description:
In this task, the objective is to search for a specific word in a file and count the number of times it occurs:

1. Reading the file content using Node.js's file system module `(fs/promises)`.
2. Cleaning the text of punctuation for accurate word matching.
3. Counting the exact occurrences of the user-provided word in the file.
4. Handling errors gracefully, such as if the file cannot be read or does not exist.

- Handle cases where the file is missing or cannot be read using try-catch.
- Ensure the readline interface is closed properly in all scenarios using finally.


---

## Approach:
1. **File Reading**: Use the `fs.readFile()` method from the `fs/promises` module to read the file asynchronously.
2. **Text Cleaning**: Remove punctuation marks `(e.g., commas, periods)` using a regular expression `(/[.,!?]/g)` and Split the cleaned text into individual words using the `.split(" ")` method.
3. **User Input**: Prompt the user to input the word to search for using `readline/promises`.
4. **Word Occurrence Calculation**: Compare each word in the text with the user-provided word and count the matches..

---

## Steps:
- **Step 1**: Import necessary modules `(fs/promises and readline/promises)` for file handling and user interaction.
- **Step 2**: Read the content of the file `(text.txt)` using `fs.readFile()`.
- **Step 3**: Clean the file content by removing punctuation and splitting it into words.
- **Step 4**: Use `readline` to prompt the user for the word to search.
- **Step 5**: Iterate over the array of words and count matches for the input word.
- **Step 6**: Display the count of occurrences to the user.

---



