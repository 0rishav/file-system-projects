# Problem 7: Copy the contents of one file into another.

## Description:
In this task, the objective is to copy the contents of one file into another. The source file's content will be read and then written into a destination file:

1. Efficiently read the source file content and write it to the destination file using Node.js's file system module `(fs/promises)`.
2. Gracefully handle potential errors, such as missing files or insufficient write permissions.

- Handle cases where the file is missing or cannot be read using try-catch.


---

## Approach:
1. **File Reading**: Use the `fs.readFile()` method from the `fs/promises` module to asynchronously read the contents of the source file.
2. **File Writing**: Use the `fs.writeFile()` method to write the read content into the destination file.
3. **Error Handling**: Use a `try-catch` block to handle errors like file not found, permission issues, or other I/O errors.
4. **Logging**: Provide feedback to the user about the success or failure of the operation through console logs.

---

## Steps:
- **Step 1**: Use `fs/promises` for file handling.
- **Step 2**: Call `fs.readFile()` with the path of the source file and the appropriate encoding (e.g., "utf-8").
- **Step 3**: Use `fs.writeFile()` with the path of the destination file and the content read in Step 2.
- **Step 4**: Wrap the above code in a try-catch block to handle potential errors, such as file not found or permission issues.
- **Step 5**: Log success messages when the operation completes successfully and error messages in case of failure.

---



