# Problem 5: Verify whether a path is a file or a directory.

## Description:
In this task, the goal is to verify whether the given path corresponds to a file or a directory. Based on the verification:

1. If the path corresponds to a `file`, we will write a specific text to the file.
2. If the path corresponds to a `directory,` we will create the directory (if it doesn’t already exist).
3. If the file does not exist, an error message will be shown.

Error handling will be implemented to ensure that issues like the file not existing or permission errors are caught gracefully

---

## Approach:
1. **Check Path Type**: Use the `fs.lstat()` method to check the type of the path (file or directory).
2. **File Handling**: If the path is a file:
- Write predefined text (`"Your Path"`) to the file using `fs.writeFile()`.
3. **Directory Handling**: If the path is a directory:
- Use `fs.mkdir()` with the `{ recursive: true }` option to create the directory if it doesn't already exist.
4. **User-Friendly Messages**: If the file does not exist, a custom message will be shown.

---

## Steps:
- **Step 1**:  Use `fs/promises` for file system operations and `readline/promises` for user input..
- **Step 2**: Path Verification:
    - Check if the path is a file using `.isFile()`.
    - Check if the path is a directory using `.isDirectory()`.
- **Step 3**: Use `try-catch` to handle errors gracefully and provide informative error messages to the user..
- **Step 4**: Prompt the user to enter the path and process it accordingly..
- **Step 5**: Ensure the `readline` interface is properly closed in all scenarios.
- **Step 6**: If the file does not exist, display a custom error message .
---



