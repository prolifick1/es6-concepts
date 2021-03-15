var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
var numbers = [1, 2, 3, 4, 5, 6];
//Array Destructuring
var a = alphabet[0], c = alphabet[2], rest = alphabet.slice(3);
//destructure a, c, and the rest
console.log(a);
console.log(c);
console.log(rest);
// create a new array with all the alphabet and numbers array (similar to concat);
var newArray = __spreadArrays(alphabet, numbers);
console.log(newArray);
// destructure the return of a function
function sumAndMultiply(a, b) {
    return ([a + b, a * b]);
}
;
var _a = sumAndMultiply(2, 3), sum = _a[0], multiply = _a[1], _b = _a[2], division = _b === void 0 ? 'no division' : _b;
console.log(sum);
console.log(multiply);
console.log(division);
// OBJECT DESTRUCTURING
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
};
// destructure the name and age of personTwo using an alias for name, with a default set for favoriteFood
var namep1 = personTwo.name, age = personTwo.age;
console.log(namep1, age);
// destructure the name and city only of personOne, by destructuring the street from address object property
var namep2 = personTwo.name, city = personTwo.address.city;
console.log(namep2, city);
// create a personThree by destructuring an object from personOne and personTwo
var personThree = __assign(__assign({}, personOne), personTwo);
console.log(personThree);
function printUser(_a) {
    var name = _a.name, age = _a.age;
    console.log("Name is: " + name + " and age is " + age);
}
printUser(personOne);
