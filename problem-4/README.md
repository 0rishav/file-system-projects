# Problem 3: Delete a file if it exists

## Description:
In this project, Delete an existing file using the fs module in Node.js:

1. Check if the file exists before attempting to delete it.
2. If the file exists, it will be deleted.
3. If the file does not exist, an error message will be shown.

Error handling will be implemented to ensure that issues like the file not existing or permission errors are caught gracefully

---

## Approach:
1. **File Existence Check**: Use `fs.access()` to check if the file exists before attempting to delete it.
2. **Delete the File**: Use `fs.rm()` to delete the file
3. **Error Handling**: Wrap the operations in `try-catch` blocks to catch errors and display custom error messages if needed.
4. **User-Friendly Messages**: If the file does not exist, a custom message will be shown.

---

## Steps:
- **Step 1**:  Import necessary modules `(fs/promises)`.
- **Step 2**: Define an asynchronous `deleteFile(FILE)` function to handle file deletion.
- **Step 3**: Check if the file exists using `fs.access()`.
- **Step 4**: If the file exists, use `fs.rm()` to delete it.
- **Step 5**: Display a success message if the file is deleted..
- **Step 6**: If the file does not exist, display a custom error message .
---

## Code Explanation:
1. **File Existence Check**:
   - The `fs.access()` method checks whether the file exists or not before proceeding to delete it.
2. **File Deletion**:
   - The `fs.rm()` method deletes the file once the existence is verified.
3. **Error Handling**:
   - Errors like the file not existing are caught, and a custom message is displayed to the user..
---

## Error Handling:
- If the file does not exist, the error message `File doesn't exist!` will be shown.
- If there are permission issues or other errors during file deletion, they will be caught and displayed to the user.

---

