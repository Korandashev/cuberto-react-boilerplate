const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  srcPath: path.resolve(__dirname, '../', 'src'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
