const { environment } = require('@rails/webpacker')
const coffee =  require('./loaders/coffee')
const webpack = require('webpack')

environment.loaders.prepend('coffee', coffee)

// Expose old-school libraries on the window object
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery',
    'window.moment': 'moment'
  })
)

// Exclude unused moment.js locales
environment.plugins.append('ContextReplacement',
  new webpack.ContextReplacementPlugin(
    /moment[\\\/]locale$/,
    /^\.\/(en|de|fr|it)$/
  )
)

module.exports = environment
