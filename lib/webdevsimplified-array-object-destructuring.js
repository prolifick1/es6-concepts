"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
var numbers = [1, 2, 3, 4, 5, 6]; //Array Destructuring

var a = alphabet[0],
    c = alphabet[2],
    rest = alphabet.slice(3); //destructure a, c, and the rest

console.log(a);
console.log(c);
console.log(rest); // create a new array with all the alphabet and numbers array (similar to concat);

var newArray = [].concat(alphabet, numbers);
console.log(newArray); // destructure the return of a function

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

;

var _sumAndMultiply = sumAndMultiply(2, 3),
    _sumAndMultiply2 = _slicedToArray(_sumAndMultiply, 3),
    sum = _sumAndMultiply2[0],
    multiply = _sumAndMultiply2[1],
    _sumAndMultiply2$ = _sumAndMultiply2[2],
    division = _sumAndMultiply2$ === void 0 ? 'no division' : _sumAndMultiply2$;

console.log(sum);
console.log(multiply);
console.log(division); // OBJECT DESTRUCTURING

var personOne = {
  name: 'Kyle',
  age: 24,
  address: {
    city: 'Los Angeles',
    state: 'CA'
  }
};
var personTwo = {
  name: 'Sally',
  age: 32,
  address: {
    city: 'Haverford',
    state: 'PA'
  }
}; // destructure the name and age of personTwo using an alias for name, with a default set for favoriteFood

var namep1 = personTwo.name,
    age = personTwo.age;
console.log(namep1, age); // destructure the name and city only of personOne, by destructuring the street from address object property

var namep2 = personTwo.name,
    city = personTwo.address.city;
console.log(namep2, city); // create a personThree by destructuring an object from personOne and personTwo

var personThree = _objectSpread(_objectSpread({}, personOne), personTwo);

console.log(personThree);

function printUser(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log("Name is: ".concat(name, " and age is ").concat(age));
}

printUser(personOne);