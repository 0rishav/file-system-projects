# Problem 3: Rename a File Using the FS Module

## Description:
In this project, we will rename an existing file to a new name using the `fs` module in Node.js. The program will:
1. Prompt the user to input the file's current name and the desired new name.
2. Create a file dynamically with the given name and some content.
3. Rename the file to the new name provided by the user.

Error handling will be implemented to ensure graceful handling of unexpected issues.

---

## Approach:
1. **Prompt User Input**: Use the `readline/promises` module to gather the file's current and new names.
2. **File Creation**: Dynamically create a file with the provided name and write predefined content into it using `fs.writeFile()`.
3. **Rename File**: Use `fs.rename()` to rename the file from the old name to the new name.
4. **Error Handling**: Wrap the operations in `try-catch` blocks to catch and handle errors gracefully.
5. **Close Input Interface**: Ensure the `readline` interface is closed after operations are complete.

---

## Steps:
- **Step 1**: Import necessary modules (`fs/promises` and `readline/promises`).
- **Step 2**: Define an asynchronous `renameFile(oldPath, newPath)` function to handle file renaming.
- **Step 3**: Create a `readline` interface to prompt for user inputs.
- **Step 4**: Ask the user:
  - For the name of the file to create.
  - For the new name to rename the file.
- **Step 5**: Dynamically create the file using `fs.writeFile()`.
- **Step 6**: Use the `renameFile()` function to rename the file.
- **Step 7**: Handle errors during file creation or renaming.
- **Step 8**: Close the `readline` interface.

---

## Code Explanation:
1. **File Creation**:
   - The `fs.writeFile()` method creates a file with a string as its content.
2. **File Renaming**:
   - The `renameFile()` function uses `fs.rename()` to rename the file.
3. **User Input**:
   - The `readline/promises` module enables asynchronous input collection.
4. **Error Handling**:
   - Errors during file creation or renaming are caught and logged using `try-catch`.
5. **Resource Management**:
   - The `readline` interface is closed properly to avoid resource leaks.

---

## Error Handling:
- If the specified file does not exist, a clear error message is displayed.
- Invalid inputs or permission issues during renaming are handled gracefully.

---

