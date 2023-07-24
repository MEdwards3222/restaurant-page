const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { web } = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        /* menu: './src/menu.js',
        home: './src/home.js',
        contact: './src/contact.js', */
        hot: 'webpack/hot/dev-server.js',
        client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    target: "web",
    devtool: 'inline-source-map',
    devServer: {
        host: "0.0.0.0",
        static: './dist',
        hot: true,
        watchFiles: ["./src/*"],
        port: 9001,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            filename: "index.html",
            template:'./src/index.html',
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        //Adds CSS to the DOM by injecting a '<style>' tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets '@import' and 'url()' like 'import/require()' and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        //Loads a SASS/SCSS file and comiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
            },
            {
                test: /\.json$/i,
                type: 'asset/resource',
            }
        ]
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};