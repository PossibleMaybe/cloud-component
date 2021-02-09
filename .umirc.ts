import { defineConfig } from 'dumi';
const antdTheme = require('./config/theme');
console.log(antdTheme);
// export default defineConfig({
//   title: 'cloud-component',
//   favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
//   logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
//   outputPath: 'docs-dist',
//   // more config: https://d.umijs.org/config
// });

export default {
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
