# Problem 1: Create and Read Files

## Description:
In this project, we will create a file named `text.txt`, write a string into it, and then read the contents back.

## Approach:
1. We will use Node.js's `fs` module to create and write to the file.
2. After writing, we will read the file's contents and log them to the console.
3. The error handling will be done using a `try-catch` block to ensure that any issues during file operations are caught and logged appropriately.

### Steps:
- **Step 1**: Create and write to `text.txt`.
- **Step 2**: Read the contents of `text.txt` and display it on the console.
- **Step 3**: Use a `try-catch` block to handle errors during file operations.

### Code Explanation:
- The code uses `fs.writeFile()` to write content into the `text.txt` file.
- Then, `fs.readFile()` reads the content of `text.txt`.
- The error handling is done with a `try-catch` block to manage any issues during the file read/write operations.

### Error Handling:
- A `try-catch` block is used to handle any potential errors while writing to or reading from the file.
- If an error occurs during file operations, it will be caught and logged with an appropriate error message.

