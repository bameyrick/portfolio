module.exports = {
  multipass: true,
  plugins: [
    // set of built-in plugins enabled by default
    'preset-default',
    'cleanupListOfValues',
    'convertStyleToAttrs',
    'removeDimensions',
    'removeRasterImages',
    'removeScriptElement',
    'removeStyleElement',
  ],
};
