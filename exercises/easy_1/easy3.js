/*
input: integer
output: string

rules:

  ask the user for length and width of room in meters
  log the area of the room in both meters and feet

  Note: 1 square meter == 10.7639 square feet

example:

  length: 10
  width: 7
  area: 70 sq meters and 753.47 sq feet

test cases:

(10, 7) = 70, 753.47
(0, 10) = 0, 0
(13, 6.5) = 84.5, 909.54

algo:
  create a const variable to store square feet per 1 square meter
  ask user for length and store in length variable
  ask user for width and store in width variable
  calculate the area in meters and store in areaMeters variable
  calculate the araea in feet and store in areaFeet variable
  return string using the square meters area and square feet area
*/
let readlineSync = require('readline-sync');

const METERTOFEET = 10.7639;

function areaRoom() {
  let length = readlineSync.question("Enter the length of the room in meters: ");
  let width = readlineSync.question("Enter the width of the room in meters: ");
  let areaMeters = (Number(length) * Number(width)).toFixed(2);
  let areaFeet = (areaMeters * METERTOFEET).toFixed(2);

  console.log(`The area of the room is ${areaMeters} square meters (${areaFeet}).`);

}

console.log(areaRoom());