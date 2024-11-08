const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const settings = {
  mode: 'production',
  entry: {
    main: './src/index.js',
    offer: './src/oferta/offer-page.js',
    aboutus: './src/o-nas/aboutus-page.js',
    contact: './src/kontakt/contact-page.js',
  },
  output: {
    filename: 'js/[name]-[contenthash].js',
    path: path.resolve(__dirname, '../', 'dist'),
    assetModuleFilename: 'images/[name][contenthash:6].[ext]',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.css|scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.jpg|png|svg|gif|jpeg$/,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 70,
                progressive: true,
              },
            },
          },
        ],
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
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Offer',
      template: 'src/oferta/index.html',
      filename: 'oferta/index.html',
      chunks: ['offer'],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Aboutus',
      template: 'src/o-nas/index.html',
      filename: 'o-nas/index.html',
      chunks: ['aboutus'],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Contact',
      template: 'src/kontakt/index.html',
      filename: 'kontakt/index.html',
      chunks: ['contact'],
      minify: {
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/images', to: 'images' }],
    }),
  ],
};

module.exports = settings;
