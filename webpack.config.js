/* eslint-env node */
const isDev = process.env.NODE_ENV === 'development';
const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: isDev ? 'development' : 'production',
  context: path.resolve(__dirname),
  entry: './src/main.ts',
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js', '.vue'],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
    }),
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      modules: true,
      modulesCount: 5000,
      profile: false,
      percentBy: 'modules',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   loaders: {
        //     ts: 'ts-loader',
        //   },
        //   esModule: true,
        // },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: process.env.PORT,
    hot: true,
  },
  optimization: {
    chunkIds: 'named',
    moduleIds: 'named',
    minimize: true,
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
    hints: 'warning',
  },
  stats: {
    preset: 'minimal',
    moduleTrace: true,
    errorDetails: true,
  },
};
