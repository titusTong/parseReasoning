const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
    {
        mode: 'production', // 环境
        entry: './src/index.js', // 入口文件
        output: {
            path: path.resolve(__dirname, './dist'), // 输出文件夹
            filename: 'parseReasoning.cjs.js', // 文件名称
            libraryTarget: 'umd', // 打包方式
            globalObject: 'this', // 全局对象
        },
        module:{
            rules: [
                {
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            targets: "defaults",
                            presets: [
                                ['@babel/preset-env']
                            ]
                        }
                    }
                }
            ],
        },
        externals: {
            // 不参与打包编译
        },
    },{
        mode: 'production', // 环境
        entry: './src/index.js', // 入口文件
        output: {
            path: path.resolve(__dirname, './dist'), // 输出文件夹
            filename: 'parseReasoning.esm.js', // 文件名称
            libraryTarget: 'module', // 打包方式
        },
        experiments: {
            outputModule: true,
        },
        module:{
            rules: [
                {
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            targets: "defaults",
                            presets: [
                                ['@babel/preset-env']
                            ]
                        }
                    }
                }
            ],
        },
        externals: {
            // 不参与打包编译
        },
    }
]