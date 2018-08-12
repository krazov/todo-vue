const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.pug$/, use: 'pug-plain-loader' },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
    ],

    // below comes from: https://stackoverflow.com/questions/43392015/vue-and-webpack-warning
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        }
    },
};
