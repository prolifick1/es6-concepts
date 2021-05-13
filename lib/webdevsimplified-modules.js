"use strict";

var _users = _interopRequireDefault(require("./users/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import from users folder
var bob = new _users["default"]('Bob', 11);
console.log(bob);