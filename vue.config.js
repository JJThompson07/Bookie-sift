module.exports = {
  pluginOptions: {},
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/scss/variables.scss";
        `,
      },
    },
  },
  // filenameHashing: false,
  // chainWebpack: config => {
  //   config.optimization.delete('splitChunks');

  //   if (config.plugins.has('optimize-css')) {
  //     config.plugins.delete('optimize-css');
  //   }
  // }
};
