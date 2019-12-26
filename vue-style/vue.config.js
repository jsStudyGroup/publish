module.exports = {
  css: {
    sourceMap: process.env.NODE_ENV === "development"
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // Provide path to the file with resources
          resources: "./src/assets/scss/global/**/*.scss"
        })
        .end();
    });
  }
};
