'use strict'

const fs = require('fs')
const path = require('path')

fs
.readdirSync(__dirname)
.filter(file => file.indexOf('.') === -1 && file !== 'node_modules')
.forEach(function (file) {
  module.exports[file] = require(`./${file}`);
})
