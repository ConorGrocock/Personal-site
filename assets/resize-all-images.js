const sharp = require("sharp");

const inputFolder = "./raw_assets/";
const outputFolder = "./public/";
const fs = require("fs");

fs.readdir(inputFolder, (err, files) => {
  files.forEach(file => {
    if (file == ".DS_Store") return;

    resize(file, 100, "xs");
    resize(file, 300, "s");
    resize(file, 500, "m");
    resize(file, 1000, "l");
    resize(file, 1500, "xl");
  });
});

function resize(file, size, sizeName) {
  outputName = file.split(".")[0] + "-" + sizeName;
  sharp(inputFolder + "/" + file)
    .resize(size)
    .jpeg({ progressive: true })
    .toFile(outputFolder + outputName + ".jpg")
    .then(info => {
      console.log(file + " " + sizeName + " jpg done");
    });
  sharp(inputFolder + "/" + file)
    .resize(size)
    .webp({ progressive: true })
    .toFile(outputFolder + outputName + ".webp")
    .then(info => {
      console.log(file + " " + sizeName + " webp done");
    });
}
