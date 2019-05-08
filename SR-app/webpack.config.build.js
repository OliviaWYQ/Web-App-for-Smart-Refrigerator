const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');
const srcRoot = path.resolve(__dirname, 'src');
// const devPath = path.resolve(__dirname, 'dev');
// const distPath = path.resolve(__dirname, 'dist');
const distPath = path.resolve(__dirname, '../SR-server/public');
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.js';

function getHtmlArray(entryMap){
	let htmlArray = [];
	Object.keys(entryMap).forEach((key)=>{
		let fullPathName = path.resolve(pageDir, key);
		let fileName = path.resolve(fullPathName, key + '.html');
		if (fs.existsSync(fileName)) {
			htmlArray.push(new HtmlWebpackPlugin({
				filename: key + '.html',
				template: fileName,
				chunks: ['common', key]
			}));
		}
	});
	return htmlArray;
}

function getEntry(){
    let entryMap = {};

    fs.readdirSync(pageDir).forEach((pathname)=>{
        let fullPathName = path.resolve(pageDir, pathname);
        let stat = fs.statSync(fullPathName);
        let fileName = path.resolve(fullPathName, mainFile);

        if (stat.isDirectory() && fs.existsSync(fileName)) {
            entryMap[pathname] = fileName;
        }
    });

    return entryMap;

}

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
  mode: "production",
//   devServer: {
//     contentBase: devPath,
//     hot: true
//   },
  entry: entryMap,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: distPath,
    filename: "js/[name].min.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: "babel-loader" },{loader: 'eslint-loader'}],
        include: srcRoot
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"], include: srcRoot },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader",
        {
          loader: 'sass-resources-loader',
          options: {resources: srcRoot + '/component/common.scss'}
        }], 
        include: srcRoot
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: "url-loader?limit=8192",
        include: srcRoot
      }
    ]
  },
    // module: {
    //     rules: [
    //         { test: /\.(js|jsx)$/, use: [{loader: 'babel-loader'},{loader: 'eslint-loader'}],include: srcRoot},
    //         { test: /\.scss$/ , use:[MiniCssExtractPlugin.loader,{loader:'css-loader',options:{minimize:true}},'sass-loader', {
    //             loader: 'sass-resources-loader',
    //             options: {
    //                 resources: srcRoot + '/component/common.scss'
    //             }
    //         }], include: srcRoot},
    //         { test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192&name=./images/[name].[hash].[ext]' , include: srcRoot}
    //     ]
    // },
  plugins: [
    //   new webpack.NamedModulesPlugin(),
    //   new webpack.HotModuleReplacementPlugin()
    new CleanWebpackPlugin([distPath],{allowExternal: true}),
    new CopyWebpackPlugin([
        { from: 'src/json', to: path.resolve(distPath, 'json'), force: true },
        { from: 'src/static', to: path.resolve(distPath, 'static'), force: true }
    ])
    // new MiniCssExtractPlugin({
    //     filename: "css/[name].[hash].css",
    // })
  ].concat(htmlArray)
};