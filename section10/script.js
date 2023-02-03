'use strict';
/*
///////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

*/


/*
//////////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    
    if (passenger.passport === 24739479284) {
        alert('Checked in');
    } else {
        alert('Wrong passport');
    }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

/*
/////////////////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirsWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join (' ');
};

// Higher-order function

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirsWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time

const high5 = function () {
    console.log('✋🏿');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

*/


/*
////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} $name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
*/

/*
///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
});

// console.log(isPrivate);

(() => console.log('This will ALSO never run again')) ();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

/*
// Coding Challenge #2
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
*/