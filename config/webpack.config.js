const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const settings = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    offer: './src/oferta/offer-page.js',
    aboutus: './src/o-nas/aboutus-page.js',
    contact: './src/kontakt/contact-page.js',
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../', 'dist'),
    assetModuleFilename: 'images/[name][contenthash:6].[ext]',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    open: true,
    static: path.resolve(__dirname, '../', 'public'),
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css|scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jpg|png|svg|gif|jpeg$/,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '2.0.0' }],
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      title: 'Offer',
      template: 'src/oferta/index.html',
      filename: 'oferta/index.html',
      chunks: ['offer'],
    }),
    new HtmlWebpackPlugin({
      title: 'Aboutus',
      template: 'src/o-nas/index.html',
      filename: 'o-nas/index.html',
      chunks: ['aboutus'],
    }),
    new HtmlWebpackPlugin({
      title: 'Contact',
      template: 'src/kontakt/index.html',
      filename: 'kontakt/index.html',
      chunks: ['contact'],
    }),
  ],
};

module.exports = settings;
