/*
CIS 124: Introduction to JavaScript
Chapter 4 Class Exercises
Dominique Tepper, 24OCT2022

    1. Coding example using a Number, String and Date method (one of each object)
    2. Coding example using a Function - create a standard function with no parameters, does not return a value
    3. Coding example using a Function - which returns a value
    4. Rewrite the above Function using an arrow function
    5. Instantiate a simple Object with properties and methods

Reference:
Math Constants: http://www.numericana.com/answer/constants.htm
  
*/

"use strict";

/*** 1. DATA TYPES ****************************************/

// A - Number. Tepper, 25OCT2022.
const pi = 3.1415926535;
const sqrt2 = 1.4142135623;
const sqrt3 = 1.7320508075;
const log2 = 0.3010299956;

// 2.1B - String. Tepper, 25OCT2022.
const avogadro = "A = 6.02214129(27) 10^23/mol";
const einstein = "c = 299792458 m/s";
const boltzmann = "k = 1.3806488(13) 10^-23 J/K";

// B - String (in Arrays). Tepper, 25OCT2022.
const piTxt = ["pi = ", "Pi is the ratio of the perimeter of a circle to its diameter. On March 14 of every year, the world celebrates ", "Pi Day"];

const sqrt2Txt = ["sqrt(2) = ", "Root 2 is the diagonal of a square of unit side. It is also known as ", "Pythagoras' Constant"];

const sqrt3Txt = ["sqrt(3) = ", "Root 3 is the diameter of a cube of unit side. Also called ", "Constant of Theodorus" ];

const log2Txt = ["log(2) = ", "Its 5-digit value is memorized by every engineer", "and is deemed precise to its 8th digit."];


// C - Date. Tepper, 25OCT2022.
const today = new Date();


/*** FUNCTIONS ****************************************/

let welcome1 = "Hello! This is a Chapter 4 class exercise for CIS 124: Introduction to JavaScript. ";
let welcome2 = "Chapter 4 shows how to work with JavaScript objects, functions, and events.";
let welcome3 = " Below are some examples of commonly used constant values in Math and Physics.";
let title = "Math & Physics Constants";

// 2. Functions that don't return values. Tepper, 25OCT2022.
function hello() {
    document.write(welcome1 + welcome2 + welcome3);
}

function strConstants () {
    document.write(`<br><h3><b>Other constants (string values)</b></h3><p><b>Avogadro's Number: </b>${avogadro}</p><p><b>Einstein's Constant: </b>${einstein}</p><p><b>Boltzmann's Constant: </b>${boltzmann}</p><br>`)
}

// 3. Function that return a values. Tepper, 25OCT2022.

// date value
function now() {
    document.write(`<br><h3><b>${today.toDateString()}, ${title}</h3></b> <br>`);
}

// string and numeric values
function constDesc() {
    document.write(`<h4>${piTxt[0]} ${pi.toFixed(3)}</h4><p>${piTxt[1]} <u>${piTxt[2]}</u></p>`);
    
    document.write(`<h4>${sqrt2Txt[0]} ${sqrt2.toFixed(3)}</h4><p>${sqrt2Txt[1]} <u>${sqrt2Txt[2]}</u></p>`);

    document.write(`<h4>${sqrt3Txt[0]}${sqrt3.toFixed(3)}</h4><p>${sqrt3Txt[1]} <u>${sqrt3Txt[2]}</u></p>`);

    document.write(`<h4>${log2Txt[0]} ${log2.toFixed(3)}</h4><p>${log2Txt[1]} (<b>${log2.toFixed(5)}</b>) <u>${log2Txt[2]}</u></p>`);
}

now();
hello();
constDesc();
strConstants();


// 4. Arrow Functions. Tepper, 25OCT2022.

// Rewrite functions into arrow functions

let radius = 0;

// Function expression that calculates circumference
function calcCirc1() {
    radius = 3;

    const circ = pi * (radius * radius);
    document.write(`<h4>Function Expression:</h4> <p>A circle with a radius of ${radius} has the circumference of ${circ.toFixed(2)}.</p>`)
}
calcCirc1();

// The above function converted into an arrow function
const calcCirc2 = (radius, pi) => {
    pi = 3.1415926535;
    radius = 4.32165;
    const circ = pi * (radius * radius);
    document.write(`<h4>Arrow Function:</h4> <p>A circle with a radius of ${radius} has the circumference of ${circ.toFixed(2)}.</p>`)
}
calcCirc2();


/*** 5. INSTANTIATION ****************************************/

// Instantiate a simple Object with properties and methods

let referenceEl = document.getElementById("reference-el");

let refAuthor = "Michon, G.";
let refSite = "Numerical Constants. http://www.numericana.com/answer/constants.htm";

function reference() {
    let refStr = "Reference: " + refAuthor +  refSite + ".";
    referenceEl.textContent = refStr;
}

reference();