const antdTheme = require('./config/theme');
export default {
  esm: 'rollup',
  cjs: 'rollup',
  lessInRollupMode: {
    javascriptEnabled: true,
    modifyVars: antdTheme,
  },
};
