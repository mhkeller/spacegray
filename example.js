// This is a comment

var module = require('my-module')

import * as myModule from 'my-module'

function Person (id) {
  var self = this
  self.id = id
}

Person.prototype.initialize = function () {
  var names = ['hello', 'goodbye']
  var index = Math.round(Math.random())
  this.name = names[index]
}

Person.prototype.greet = function () {
  var options = {
    coming: 'hello',
    going: 'goodbye'
  }
  var index = Math.round(Math.random())
  var key = Object.keys(options)[index]
  return options[key]
}

var person1 = new Person(1)
console.log(person1.greet().coming)
console.log(person1.greet().going)

module.exports = Person

// es6 module
export default myModule
