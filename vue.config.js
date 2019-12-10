const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery"
            })
        ]
    },
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                data: `@import "~@/assets/css/variables.scss";`
            },
            // pass Less.mock Options to less-loader
            less: {
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                globalVars: {
                    primary: '#fff'
                }
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                pathRewrite: {
                    '^/api' : '/public/mock'
                }
            }
        }
    }
}