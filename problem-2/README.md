# Problem 2: Create a New Folder and List All Files

## Description:
In this project, we will create a new folder, dynamically generate files inside that folder, and then list all the files in that folder. Additionally, the files will be sorted based on their numeric identifiers (e.g., `file-1.txt`, `file-2.txt`, etc.) to ensure they are listed in the correct order.

## Approach:
1. **Create a New Folder**: We will use the `fs.mkdir()` method to create a new folder in the project directory.
2. **Create Files Dynamically**: Using a loop, we will create multiple files inside the new folder. Each file will have a unique name (`file-1.txt`, `file-2.txt`, ..., `file-50.txt`), and the content will be written into each file.
3. **List Files and Sort**: After the files are created, we will list all the files in the folder using `fs.readdir()`. The files will be sorted numerically based on their identifier (e.g., `file-1.txt` should come before `file-10.txt`).
4. **Error Handling**: We will implement a `try-catch` block to handle any potential errors during the folder creation, file creation, or file listing process.

### Steps:
- **Step 1**: Create a new folder named `new-directory`.
- **Step 2**: Use a loop to create 50 text files inside the folder.
- **Step 3**: List all files in the folder.
- **Step 4**: Sort the files based on their numeric identifiers (e.g., `file-1.txt`, `file-2.txt`, etc.).
- **Step 5**: Display the sorted list of files in the console.

### Code Explanation:
- We use `fs.mkdir()` to create the folder `new-directory`.
- A function `createFile()` is used to dynamically create 50 text files using a loop, where each file contains a string that identifies it (e.g., `This is the string from file-1`).
- We use `fs.readdir()` to list all the files in the directory and then sort them numerically by extracting the number from the file names using a regular expression.
- The sorted list of files is then printed to the console.

### Error Handling:
- A `try-catch` block is used to ensure that any errors during folder creation, file creation, or file listing are caught and logged appropriately.
- Errors during the process will result in a message being logged to the console.
