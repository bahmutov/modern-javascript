// index.js
const add = require('./add')
module.exports = {
  add,
  sub (a, b) {
    return a - b
  }
}
