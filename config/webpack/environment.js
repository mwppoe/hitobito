const { environment } = require('@rails/webpacker')
const coffee =  require('./loaders/coffee')
const erb = require('./loaders/erb')
const webpack = require('webpack')

environment.loaders.prepend('coffee', coffee)
environment.loaders.prepend('erb', erb)

/**
 * Old-school libraries must be made globally accessible by exposing
 * them to the window object.
 */
environment.loaders.append('expose query to window object', {
  test: require.resolve('jquery'),
  use: [{
    loader: 'expose-loader',
    options: {
      exposes: ['jQuery', '$'],
    }
  }]
})
environment.loaders.append('expose moment to window object', {
  test: require.resolve('moment'),
  use: [{
    loader: 'expose-loader',
    options: {
      exposes: 'moment',
    }
  }]
})

environment.plugins.append('exclude unused moment locales',
  new webpack.ContextReplacementPlugin(
    /moment[\\\/]locale$/,
    /^\.\/(en|de|fr|it)$/
  )
)

module.exports = environment
