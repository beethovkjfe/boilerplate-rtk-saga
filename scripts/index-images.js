const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

const getImageImportNameFromFilename = fileName => path.parse(fileName).name;
const getImagePathNameFromFilename = fileName => path.parse(fileName).base;

const build = async (inputDir, outputDir) => {
  const imagePaths = glob.sync(`${inputDir}/*.{png,svg,jpg,jpeg}`);
  const inputOutputPaths = imagePaths.map(p => ({
    name: getImageImportNameFromFilename(p),
    path: getImagePathNameFromFilename(p)
  }));
  const inputOutputMap = inputOutputPaths.reduce(
    (acc, inpPath) => ({
      ...acc,
      [inpPath.name]: inpPath.path
    }),
    {}
  );

  const imageMap = inputOutputPaths.reduce(
    (acc, k) => `${acc} '${k.name}': () => require('../assets/images/${k.path}'),`,
    ''
  );
  const contents = `
    export const imageMap = {${imageMap}};
    export type imageMapKeys = ${Object.keys(inputOutputMap)
      .map(k => `'${k}'`)
      .join(' | ')};
  `;
  fs.outputFileSync(path.join(outputDir, 'index.ts'), contents);
};

const OUTPUT_DIR = 'src/.images';
const INPUT_DIR = 'src/assets/images';
build(INPUT_DIR, OUTPUT_DIR);
