const path = require('path');
const fs = require('fs-extra');
const svgr = require('@svgr/core').default;
const glob = require('glob');
const SVGO = require('svgo/lib/svgo');

const templateWrapper = ({ template }, opts, { componentName, jsx }) => {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import * as React from 'react';
    import { SVGComponentProps } from '../types';

    const ${componentName} = ({title, ...props}: SVGComponentProps) => ${jsx};
    export default ${componentName};
  `;
};

const svgrOptions = {
  template: templateWrapper,
  titleProp: true
};

const svgo = new SVGO({
  plugins: [
    { collapseGroups: false },
    { convertShapeToPath: false },
    { convertPathData: false },
    { removeViewBox: false },
    { convertTransform: false },
    {
      removeAttrs: { attrs: '(class|id|fill|stroke)' }
    },
    {
      addAttributesToSVGElement: { attributes: [`focusable = "false"`] }
    }
  ]
});

const transformSVGToComponent = async (inputPath, outputPath) => {
  const svgCode = fs.readFileSync(inputPath);
  const svgoOptimizedCode = await svgo.optimize(svgCode);
  const tsCode = await svgr(svgoOptimizedCode.data, svgrOptions);
  fs.outputFileSync(outputPath, tsCode);
  return outputPath;
};

const getIconImportNameFromFilename = fileName => path.parse(fileName).name;

const getIconNameFromFilename = fileName => {
  const name = getIconImportNameFromFilename(fileName);
  return name.slice(0, name.lastIndexOf('-'));
};

const getOutputPathForInput = (inputPath, outputDir) => {
  const iconName = path.parse(inputPath).name;
  const fileName = `${iconName.split('.')[0]}-icon.tsx`;
  return path.join(outputDir, fileName);
};

const build = async (inputDir, outputDir) => {
  const iconPaths = glob.sync(`${inputDir}/*.icon.svg`);
  const inputOutputPaths = iconPaths.map(p => ({ inputPath: p, outputPath: getOutputPathForInput(p, outputDir) }));
  await Promise.all(inputOutputPaths.map(paths => transformSVGToComponent(paths.inputPath, paths.outputPath)));
  const inputOutputMap = inputOutputPaths.reduce(
    (acc, inpPath) => ({
      ...acc,
      [getIconNameFromFilename(inpPath.outputPath)]: getIconImportNameFromFilename(inpPath.outputPath)
    }),
    {}
  );
  const iconMap = Object.keys(inputOutputMap).reduce(
    (acc, k) => `${acc} '${k}': () => import('./${inputOutputMap[k]}'),`,
    ''
  );
  const contents = `
    export const iconMap = {${iconMap}};
    export type iconMapKeys = ${Object.keys(inputOutputMap)
      .map(k => `'${k}'`)
      .join(' | ')};
  `;
  fs.outputFileSync(path.join(outputDir, 'index.ts'), contents);
};

const OUTPUT_DIR = 'src/.icons';
const INPUT_DIR = 'src/assets/icons';
build(INPUT_DIR, OUTPUT_DIR);
