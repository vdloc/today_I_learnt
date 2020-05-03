const { markdownToTxt } = require("markdown-to-txt");
const fs = require("fs");
const path = require("path");
const isDir = (path) => fs.existsSync(path) && fs.lstatSync(path).isDirectory();
const markdownFiles = [];

const grabMarkdownFiles = (filePath) => {
  const files = fs.readdirSync(filePath);

  files.forEach((file) => {
    console.log("grabMarkdownFiles -> file", file);
    const fullFilePath = path.resolve(filePath, file);

    if (isDir(fullFilePath)) {
      grabMarkdownFiles(fullFilePath);
    } else if (/\.md$/.test(file)) {
      markdownFiles.push(fullFilePath);
    }
  });
};
grabMarkdownFiles("./");

markdownFiles.forEach((file) => {
  const markdownContent = fs.readFileSync(file, "utf-8");
  const textContent = markdownToTxt(markdownContent);
  const dirName = path.dirname(file);
  const fileName = path.basename(file);

  fs.writeFileSync(
    path.join(dirName, fileName.replace("md", "txt")),
    textContent
  );
});
