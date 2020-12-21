/*
input: string of chrs
output: object with type of chars and count of each type

rules:
  find the % of chrs in string that are lowercase
  find the % of chrs in string that are uppercase
  find the % of chrs in string that are neither (digits, space, non alpha chrs)

  for the count of each type of char, return the percentage (ex. string has a length of 10, and 5 chrs are lowercase, then return 50.00 as the value for this type)
    => USE TWO DECIMAL POINTS FOR VALUE
  if there is zero count for a certain type, still return the key and value for it, using 0.00 as value

questions:
  does a space count as a char?

test cases:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

letterPercentages('    '); // 4 spaces
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

letterPercentages(''); // 4 spaces
// { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }

algo:

  option 1: use an obj to store results and use array to iterate through string 

  create an object called result with the following properties set to 0
    lowercase: 0, 
    uppercase: 0, 
    neither: 0

  split string into array at chrs
  use forEach to iterate through array
    for each chr, check the following:
      if chr is not a letter, add 1 to the neither property in result obj
      if chr is lowercase, add 1 to the lowercase property in result obj
      else add 1 to uppercase property in result obj

  use a for loop to iterate through the result obj
  for each property, divide the value by the input string length and adjust value to contain 2 decimal points
  return obj
*/

// using obj and array
function letterPercentages(string) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  string.split("").forEach(chr => {
    if (/[^A-Za-z]/.test(chr)) {
      result.neither += 1;
    } else if (/[a-z]/.test(chr)) {
      result.lowercase += 1;
    } else {
      result.uppercase += 1
    }
  });

  for (let prop in result) {
    if (Number.isNaN(result[prop] / string.length)) {
      result[prop] = "0.00";
    } else {
      result[prop] = ((result[prop] / string.length) * 100).toFixed(2);
    }
  }

  return result;
}

using regex and obj
function letterPercentages(string) {
  let result = {
    lowercase: (string.match(/[a-z]/g) || []).length,
    uppercase: (string.match(/[A-Z]/g) || []).length,
    neither: (string.match(/[^A-Za-z]/g) || []).length
  }

  for (let prop in result) {
    if (Number.isNaN(result[prop] / string.length)) {
      result[prop] = "0.00";
    } else {
      result[prop] = ((result[prop] / string.length) * 100).toFixed(2);
    }
  }

  return result;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('    ')); // 4 spaces
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('')); // 4 spaces
// { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }
