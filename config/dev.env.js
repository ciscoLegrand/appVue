var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  TOKEN: '"6e49b9b7cabb6815f8e249e8e0e7b06fae94cc7e"'
})
