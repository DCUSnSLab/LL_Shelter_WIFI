const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ... 다른 설정들 ...

  resolve: {
    fallback: {
      "url": require.resolve("url/")
    }
  },
};


  //   plugins: [
  //   new webpack.ProvidePlugin({
  //     Buffer: ['buffer', 'Buffer'],
  //   }),
  // ],
  //   node: {
  //   Buffer: true,
  // },