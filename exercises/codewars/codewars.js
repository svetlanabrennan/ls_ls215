/*
1. name: ISBN 10 Validation
input: string
output: boolean
rules:
  take an input string that has the first 9 chrs as digits between 0-9 and the last digit is either 0-9 or X (for value of 10)
  check if the input string (isb number) is valid

  valid means:
    sum of digits * their position % 11 === 0
    NOTE:
      multiply digit by its position, then sum up results then use % 11

example:
  ISBN     : 1 1 1 2 2 2 3 3 3  9 => 1 2 3 6 10 12 21 24 27 90 = 198 % 11 => 0
  position : 1 2 3 4 5 6 7 8 9 10

questions:
  what should I return if the input string is less than 10 or more than 10

edge cases:
  return false for these situations:
    if input string length is < 10 or > 10
    if first 9 chrs contain not digits
    if last chr contains any letter but X or a not a digit

algo

  if string length is NOT EQUAL to 10 return false
  if the first 9 chrs contain not digits return false
  if the last chr contains a letter between a-wyz

  split string into array at "" and assign to result variable
  map through result array
    if chr is a digit return digit * index + 1
    else return 10 * index + 1

  assign mapped array to sum variable
  return sum variable % 11 === 0
*/

// function validISBN10(isbn) {
//   let array = isbn.split("");

//   if (invalidISBN(array)) {
//     return false;
//   }

//   let sum = array.map((num, idx) => {
//     if (/\d/.test(num)) {
//       return num * (idx + 1);
//     } else {
//       return 10 * (idx + 1);
//     }
//   }).reduce((prev, curr) => prev + curr);

//   return sum % 11 === 0;
// }

// function invalidISBN(array) {
//   return array.length !== 10 || !array.slice(0, 9).every(chr => /\d/.test(chr)) || /[A-Wa-wYZyz]/.test(array[9]);
// }

// console.log(validISBN10("1112223339")); // true
// console.log(validISBN10("048665088X")) // true
// console.log(validISBN10("1234512345")) // false


////////////////////////////////////////

/*
2. Twice linear
input: integer
output: integer
rules:
  given an input number, find the element at that index in the linear array
  the linear has to be calculated with the first element in array being 1
  to calculate the next value you use this forumula:
    2 * element + 1
    3 * element + 1

example:
u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
u(10) returns 22

algo:

  create a result array = [1]
  let curr value = take the last value in result array // 1
  create a for loop that will iterate this number of times (input / 2);
  calculate the next two values (subprocess)
    let x = 2 * curr + 1
    let y = 3 * curr + 2
    push x to result array
    push y to result array
      sort result array desc
    // [1, 3, 4]
    reassign curr variable to current loop index
  remove duplicates in result array
  return element at input number index
*/

// function dblLinear(n) {
//   let result = [1];
//   let curr = result[0];

//   for (let i = 1; i <= n; i += 1) {
//     let x = 2 * curr + 1;
//     let y = 3 * curr + 1;
//     result.push(x);
//     result.push(y);
//     result.sort((a, b) => a - b);
//     curr = result[i];
//   }

//   result = [...new Set(result)];
//   return result.sort((a, b) => a - b)[n];
// }

// console.log(dblLinear(10)); //22
// console.log(dblLinear(20)); // 57
// console.log(dblLinear(30)); // 91
// console.log(dblLinear(50)); // 175
// console.log(dblLinear(100)); // 447

////////////////////////////////////////

/*
3. name: track the robot
input: integers
output: array with integers
rules:
  you have to calculate the robots final position
  position starts with (0, 0)
  after each move, the robot rotates 90 degrees clockwise

examples:
20, 30, 10, 40 => [-10, 10]
() => [0, 0]

(-10, 20, 10) => [20, -20]
1st: [0, 0] => [0, -10]
2nd: [0, -10] => [20, -10]
3rd: [20, 0]; => [20, -20]

notes:
  first two moves are adding to count
    1st move is to element at index 1
    2nd move is to element at index 0
  next two moves are subtracting from count

algo:
  create a result array = [0, 0]
  assign all input integers to another array called moves
  create a direction variable set to 1
  iterate through moves array
    for each move do this:
      if move variable is 1 add value to index 1 in result array
        add 1 to move variable
      if move variable is 2 add value to index 0 in result array
        add 1 to move variable
      if move variable is 3 subtract value from index 1 in result array
        add 1 to move variable
      if move variable is 3 subtract value from index 0 in result array
        set move variable = 1;

  return result array
*/

// function trackRobot(...moves) {
//   let result = [0, 0];
//   let movesArr = [...moves];
//   let direction = 1;

//   movesArr.forEach(move => {
//     if (direction === 1) {
//       result[1] = result[1] + move;
//       direction += 1;
//     } else if (direction === 2) {
//       result[0] = result[0] + move;
//       direction += 1;
//     } else if (direction === 3) {
//       result[1] = result[1] - move;
//       direction += 1;
//     } else {
//       result[0] = result[0] - move;
//       direction = 1;
//     }
//   });
//   return result;
// }

// console.log(trackRobot(20, 30, 10, 40)); // [-10, 10]
// console.log(trackRobot()); // [0, 0]
// console.log(trackRobot(-10, 20, 10));

////////////////////////////////////////

/*
4. least common multiple
input: array of integers
output: integer

rules: find the smallest positive integer that is evenly divislbe by all members of array (least common multiple)

questions:
what should I return if input is empty - return 0
what should I return if input is 0 - return 0
will the inputs be negative numbers - calculate like more
what if input is not an array


test cases:
lcm([1, 2, 3, 4, 5, 6, 7, 8, 9]) ➞ 2520
lcm([5]) ➞ 5
lcm([5, 7, 11]) ➞ 385
lcm([5, 7, 11, 35, 55, 77]) ➞ 385
lcm([0]) // 0
lcm([]) // 0
lcm() // 0
lcm([-5, -10, -15]) 30

example:
[5, 7, 11]

[5, 10, 15, 20, 25]
[7, 14, 21, 28, 35]
[11, 22, 33, 44, 55]

notes:
can you create a loop that will add multiples for each number (each numbers has its own array of multples) and break when all those arrays have one digit in common and return that in common digit

algo:
  create a array called multiples with the length of the input array
  fill that array with empty arrays = [[], [], []]
  create a while loop
    for each round, run a forEach loop that will calculate the multiple for each element and store that multiple in its corresponding index array in result array
    check if the result array, if reach nested array has one number in common (subprocess)
      concat all nested arrays in result array
      sort the array desc
      use a for loop to iterate through array
      if the current element is EQUAL to the next 2 indexes down, return that element
      if not found, continue with loop until it ends
    if no, continue
*/

// function lcm(numbers) {
//   if (!Array.isArray(numbers) || numbers.length === 0) {
//     return 0;
//   }

//   let multiples = Array(numbers.length).fill([]);
//   numbers.forEach((num, idx) => {
//     multiples[idx] = [num];
//   });

//   while (true) {
//     numbers = numbers.map((num, idx) => {
//       multiples[idx].push(num + multiples[idx][0]);
//       return num + multiples[idx][0];
//     });

//     let combined = multiples.flat().sort((a, b) => a - b);

//     for (let i = 0; i < combined.length; i += 1) {
//       if (combined[i] === combined[i + (numbers.length - 1)]) {
//         return Math.abs(combined[i]);
//       }
//     }
//   }
// }

// console.log(lcm([5, 7, 11])); // 385
// console.log(lcm([5, 7, 11, 35, 55, 77])) // ➞ 385

// console.log(lcm([5]))// ➞ 5)
// console.log(lcm([0])) // 0
// console.log(lcm([])) // 0
// console.log(lcm()) // 0
// console.log(lcm([-5, -10, -15])) // 30
// console.log(lcm([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 2520


////////////////////////////////////////

/*
5. rearrange sentence

input: string
output: string
rules:

  return a sorted string based on the numbers in each string
  must remove the number from each word before returning it

example:
"is2 Thi1s T4est 3a" ➞ "This is a Test"

edge cases:
  will the numbers follow a sequence ...like 1 2 3 or will it skip like 1 4 7 12
  will the numbers go past 9 .. no
  if input is an empty string return emptry string
  what happens when input value is not string
  what happens when the word is made up of only numbers?
  will there be a period after the sentence? ADD THIS LATER

test cases:

rearrange("is2 Thi1s T4est 3a") //➞ "This is a Test"
rearrange("4of Fo1r pe6ople g3ood th5e the2") //➞ "For the good of the people"
rearrange(" ") // ➞ ""
rearrange("i7s r9ed M1y ap6ple") // "My apple is red"

algo

  option 1: using to loops to find words in right order and push to new array
  if string is empty, return emptry string
  if input value is not a string return empty string
  create an empty result array
  split string into array
  iterate through array with forEach // this will outer loop to control the number of times to check the string
    create another foreach // this is inner loop that will loop through string/array for each outer loop
    find the element who's index is equal to the outer loop index
    if found, remove the digit from word (using replace) and push to result array
    otherwise do nothing
  join result array at " " and return

  option 2: use sort and regex to sort array, remove digit and return word
    split string into array
    sort array
      define what element a will be
      define what element b will be
      compare a - b
    map through sorted array and replace digit with ""
    join array and return
*/

// function rearrange(string) {
//   let result = [];
//   let words = string.split(" ");
//   words.forEach((word, outerIdx) => {
//     words.forEach(str => {
//       if (str.includes(outerIdx + 1)) {
//         let cleaned = str.replace(/\d/g, "");
//         result.push(cleaned);
//       }
//     });
//   });
//   return result.join(" ");
// }

// function rearrange(string) {
//   if (emptyString(string) || string.length === 0) {
//     return ""
//   }

//   let words = string.split(" ");
//   return words.sort((a, b) => {
//     let first = a.match(/\d/g)[0];
//     let second = b.match(/\d/g)[0];
//     return first - second;
//   }).join(" ").replace(/\d/g, "");
// }

// function emptyString(string) {
//   if ((string.match(/\s/g) || []).length === string.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(rearrange("is2 Thi1s T4est 3a")) // "This is a Test"
// console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); //➞ "For the good of the people"
// console.log(rearrange(" ")); // ➞ ""
// console.log(rearrange("i7s r9ed M1y ap6ple")); // "My apple is red"

////////////////////////////////////////

/*
6. Max first number
input: two integers
output: one integer, largest possible number
rules:
  make the first input integer as large as possible by swapping out its digits with any digit in the second number
  can't use the digits in the second number more than once
  you don't have to use any or all digits in the second nuber

questions:
  can I sort the digits in the first number => no, can only replace them
  will it be whole numbers => yes
  what if first number is 0, can second number is 0 => return 0
  what if first number is 0, and second number is a none zero number => return the second number
  what do i do with the discarded num from 1st number => don't use it

example:

start: 9132, 5564
1st: (9) > than any nums in 5564 yes, then keep
2nd: 9 (1) > than any nums in 5564, no then find max number in 5564, remove it and put in in this array
3rd: 96 (3) > than any nums in 554, no then find max numbe rin 554, remove it and put it in this array
4th: 965 (2) > than any nums in 54, no then find max num in 54,remove it and put it in this array
reutrn 9655

edge cases:
  if first number and second number are both 0 return 0
  if first number is 0 and second number is not zero, return second number

algo:

    convert each number into an array (turn into string and split at "")
    map through 1st num array
      find max number in 2nd array
      if current map num < max num do this:
         replace num with max
         remove used max num from 2nd array
      else
        return current num
    join mapped array at "", turn into number and return

    add edge cases
*/

// function maxPossible(first, second) {

//   if (first === 0 && second === 0) {
//     return 0;
//   }

//   if (first === 0 && second !== 0) {
//     return second;
//   }

//   let secondArr = String(second).split("").sort((a, b) => b - a);

//   let firstArr = String(first).split("").map(num => {
//     let max = secondArr[0];
//     if (max > num) {
//       secondArr.splice(0, 1);
//       return max;
//     } else {
//       return num;
//     }
//   });

//   return Number(firstArr.join(""));
// }

// console.log(maxPossible(9132, 5564)); // 9655
// console.log(maxPossible(523, 76)) // 763
// console.log(maxPossible(8732, 91255));
// console.log(maxPossible(0, 0)); // 0
// console.log(maxPossible(0, 125)); // 125

////////////////////////////////////////

/*
7. connecting words
input: array of strings
output: string and number (of connecting words)
rules:
  connect previous word with next word by the shared letters
  return the combined string (and REMOVE duplicate letters overlapping)
  return the minimum number of shared letters across all pairs

example:
["move", "over", "very"]
move over
m(ove)r = 3

mover very
mo(ver)y = 3
movery

["oven", "envier", "erase", "serious"]
oven envier
ov(en)vier = 2

ovenvier erase
ovenvi(er)ase = 2

ovenvierase serious
ovenviera(se)rious =2

notes:
  need a way to store all count of shared numbers => use array
  need a way to find sharable words

questions:
  what happens if there are two sharable words between two words => combine words without sharing letters (just push word to array)

edge cases:
  if not sharable letters, just return the current word

algo:
  create an empty count array to track min numbers of shared letters
  map through input array
    for each word, do this (use a for loop)

      example: move
      let start = ""
      (m) => does "over" start with start + m (""+m), no keep looping
      m(o) => does "over" start with start + o(""+o), yes then add o plus rest of the string to start variable => start = "ove"
        if next word starts with value of start (ove) then do this:
          remove value of start from next word using replace
          get count of start and push count to count array
          return current word
        else
          return current work

  return an array with index 0 being the combined mapped input array and index 1 being the min number in count array

*/

// DIDN"T FINISH
// function join(words) {
//   let count = [];
//   let result = "";

//   result += words[0];
//   // console.log(result);

//   for (let wordIdx = 0; wordIdx < words.length; wordIdx += 1) {

//     let ending = "";
//     let nextWord = words[wordIdx];

//     for (let letterIdx = 0; letterIdx <= result.length; letterIdx += 1) {

//       if (nextWord !== undefined && nextWord.startsWith(result[letterIdx])) {
//         ending = result.slice(letterIdx);
//         nextWord = nextWord.replace(ending, "");
//         result += nextWord;
//         wordIdx += 1;
//         count.push(ending.length);
//       }
//     }

//     if (ending === "") {
//       result += nextWord;
//     }

//   }
//   if (count.length === 0) {
//     count = 0;
//   } else {
//     count = Math.min(...count)
//   }
//   return [result, count];
// }

// console.log(join(["move", "over", "very"]));
// console.log(join(["aaa", "bbb", "ccc", "ddd"]));
// console.log(join(["oven", "envier", "erase", "serious"]));

