module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/colors.scss";
        `,
      },
    },
  },
};
