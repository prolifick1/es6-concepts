"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printName = printName;
exports.printAge = printAge;
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(name, age) {
  _classCallCheck(this, User);

  this.name = name, this.age = age;
};

exports["default"] = User;

function printName(user) {
  console.log("User's name is ".concat(user.name));
}

function printAge(user) {
  console.log("User's age is ".concat(age));
}