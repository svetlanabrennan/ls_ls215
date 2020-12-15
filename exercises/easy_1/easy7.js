/*
input: integer
output: boolean

rules: if input number is a leap year, return true else false

leap year rules:
  year evenly divisible by 4 BUT NOT 100
  if year evenly divisble by 100 then its not leap year UNLESS its also divisble by 400

algo:
  if year % 4 is zero and year % 100 is not zero return true
  if year % 100 is zero and year % 400 is zero return true
  else return false
*/

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true