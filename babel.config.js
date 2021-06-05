module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
}
