/* //print1(1,2) this would work because declarations are hoisted
//function declaration
function print1(a, b) {
    console.log(a + b)
}

//print2(1, 2) this would not work because expressions are not hoisted
//function expression
const print2 = function(a, b) {
    console.log(a + b)
}

const button = document.querySelector('button');
button.addEventListener('click', function() { //anonymous function, also a callback function
    //change color
})

//ES6 arrow function
const print3 = (a, b) => {
    // console.log(a + b)
    return a + b
}
// console.log(print3(4, 5));

const print4 = (a, b) => a + b //implicit return if only one line of code
console.log(print4(1, 2))

const print5 = a => a * 2
console.log(print5(5));

//should use const for arrays even when changing the values inside the array, pointer remains the same
const evens = [2, 4, 6];
const odds = [3, 5, 7];

const nums = [...evens, ...odds]; //spread syntax

console.log("evens before: ", evens);
console.log("odds before: ", odds);
console.log("nums: ", nums);
console.log("evens after: ", evens);
console.log("odds after: ", odds);

const lotsOfNums = [1, ...evens, ...odds, 9, 20];
console.log(lotsOfNums);

const letters = {
    vowels: {a : 1},
    a: 1,
    b: 2,
    c: 3
};

const allLetters = {
    ...letters,
    g: 20,
};

allLetters.vowels.a = 20;

console.log('all letters: ', allLetters);
console.log('letters: ', letters)
//spread syntax is shallow copy, not deep copy

//destructuring
const user = {
    firstName: 'Gandalf',
    lastName: 'The Grey',
    location: 'Middle Earth, NJ'
}
// const firstName = user.firstName
// const lastName = user.lastName
// const location = user.location

const { firstName, lastName, location } = user
// console.log(firstName, lastNme, location);
const { firstName, ...other } = user;
//console.log(firstName, lastName, location); = last name shows up as undefined after spread syntax
console.log(firstName, other.lastName, other.location); */

const info = {
    name: "Trish",
    age: 30,
    hometown: "Jersey City, NJ"
}

const { name, age, hometown } = info;
console.log(name, age, hometown);
const {...me} = info;
console.log(me.name, me.age, me.hometown);

const evens = [2, 4, 6];
const odds = [1, 3, 5];
const nums = [...evens, ...odds];
console.log(nums);

const faveFoods = {
    chickenSandwich: "chik-fil-a",
    pizza: "margherita",
    sushi: "Japan"
}

const friendFaveFoods = {
    burger: "zinburger",
    wings: "sportsBar",
    halal: "halalGuys"
}

const allFoods = {...faveFoods, ...friendFaveFoods}
console.log(allFoods);

