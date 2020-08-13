module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({
          webpackConfig,
        }) => {
          const minimizerIndex = webpackConfig.optimization.minimizer.findIndex(item => item.options.terserOptions);
          webpackConfig.optimization.minimizer[minimizerIndex].options.terserOptions.mangle = false;
          return webpackConfig;
        },
      },
    },
  ],
};
