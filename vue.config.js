const path = require('path');

module.exports = {
    lintOnSave: true,

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'stylus',

            patterns: [
                path.resolve(__dirname, 'src/assets/theme.styl'),
                path.resolve(__dirname, 'src/assets/mixins.styl'),
            ],
        },
    },
};
