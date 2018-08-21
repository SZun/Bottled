require('babel-polyfill');
require('babel-register')({
  presets: ['env', 'react'],
  plugins: [
    'transform-object-rest-spread',
    'transform-class-properties',
    'classnames'
  ]
});

module.exports = require('./server.js');
