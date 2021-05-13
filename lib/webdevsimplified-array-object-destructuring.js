const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = [1, 2, 3, 4, 5, 6]; //Array Destructuring

const [a,, c, ...rest] = alphabet; //destructure a, c, and the rest

console.log(a);
console.log(c);
console.log(rest); // create a new array with all the alphabet and numbers array (similar to concat);

const newArray = [...alphabet, ...numbers];
console.log(newArray); // destructure the return of a function

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

;
const [sum, multiply, division = 'no division'] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
console.log(division); // OBJECT DESTRUCTURING

const personOne = {
  name: 'Kyle',
  age: 24,
  address: {
    city: 'Los Angeles',
    state: 'CA'
  }
};
const personTwo = {
  name: 'Sally',
  age: 32,
  address: {
    city: 'Haverford',
    state: 'PA'
  }
}; // destructure the name and age of personTwo using an alias for name, with a default set for favoriteFood

const {
  name: namep1,
  age // favoriteFood = 'rice'

} = personTwo;
console.log(namep1, age); // destructure the name and city only of personOne, by destructuring the street from address object property

const {
  name: namep2,
  address: {
    city
  }
} = personTwo;
console.log(namep2, city); // create a personThree by destructuring an object from personOne and personTwo

const personThree = { ...personOne,
  ...personTwo
};
console.log(personThree);

function printUser({
  name,
  age
}) {
  console.log(`Name is: ${name} and age is ${age}`);
}

printUser(personOne);