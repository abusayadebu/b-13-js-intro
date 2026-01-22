// var name = "ebu";
// var isStudent = true;
// var roll = 12;
// var goal = "to be a goo web developer";

// console.log(name, isStudent, goal);
// ----------------------

// problem-1 -- You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.---

var givenMoney = 2000;

var orangePrice = 300;
var applePrice = 400;

var totalprice = orangePrice + applePrice;

var remainingMoney = givenMoney - totalprice; 
// console.log(remainingMoney);

/*  - Problem-2 --Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. 

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
*/


let math = 80.8;
let biology = 70.5;
let chemistry = 80;
let physics = 50.2;
let bangla = 80;

const avgMark = (math + biology + chemistry + physics + bangla) / 5;
// console.log(avgMark.toFixed(3)); 

// You task is to divide the given number by 5 and show the remainder as the output.

let givenNumber = 119;

const remainderNumber = givenNumber % 5;

// console.log(remainderNumber);

// What will be the result of the following codes:

var a = isNaN('11');

console.log(a);

// var a = isNaN(2-10);
