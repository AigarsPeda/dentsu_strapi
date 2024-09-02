const fs = require("fs");
const path = require("path");

// Define the paths to the files
const sourcePath = path.join(__dirname, ".strapi", "client", "my_index.html");
const destinationPath = path.join(__dirname, ".strapi", "client", "index.html");

// Read the content from the source file
fs.readFile(sourcePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file from disk: ${err}`);
    return;
  }

  // Write the content to the destination file
  fs.writeFile(destinationPath, data, (err) => {
    if (err) {
      console.error(`Error writing file to disk: ${err}`);
    } else {
      console.log("File content replaced successfully.");
    }
  });
});
