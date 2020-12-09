/*
input: string
output: string (cleaned string or 10 zeros for invalid number)

rules:

  input string can contain digits, spaces, dot(s) and parentheses
  ignore the spaces, dots and parentheses

  BAD NUMBER CASES
  if num is < 10 digits
  if num is 11 digits and 1st num is NOT a 1
  if num is more than 11 digits

  GOOD NUMBER CASES
  if num is equal to 10 digits

  CLEAN UP
  if num has 11 digits AND 1st num is a 1, use the last 10 digits only

  for bad numbers, return a string of 10 zeros
  for good numbers, return number

edge cases:
  what is there is a negative number
  what is there are other characters besides space, dot or ()
  what if input string has no digits

test cases:

  ("800-541-2525") // 8005412525
  ("800.541.1212") // 8005411212
  ("(900)251-4545") // 9002514545
  ("855-456.4545") // 8554564545
  ("1800-254-9898") // 8002549898
  ("+18005254545") // 8005254545
  ("8888-254-4545") // 0000000000
  ("1-800-4545-4454") // 0000000000
  ("541-2525") // 0000000000
  ("abcdedss") // 0000000000
  ("abd-800-254-2254") // 8002542254
  ("-8-8-8-2-5-4-1-1-1-5") // 8882541115
  ("-9-8-8-8-2-5-4-1-1-1-5") // 0000000000

algo:
  use regex to extract all digits from input string and assign to digits variable
  if digits length is greater than 11, return 10 zeros
  if digit length is 11 and first digit is not 1, return 10 zeros
  if digits length is 11, reassign digits variable to itself starting from 2nd digit

*/

function validPhoneNumber(inputNumber) {
  let digits = inputNumber.match(/\d/g) || [];

  if (digits.length > 11 || digits.length < 10 || (digits.length === 11 && digits[0] !== "1")) {
    return "0000000000";
  }

  if (digits.length === 11) {
    digits = digits.slice(1);
  }

  return digits.join("");
}

console.log(validPhoneNumber("800-541-2525"));
console.log(validPhoneNumber("800.541.1212"));
console.log(validPhoneNumber("(900)251-4545"));
console.log(validPhoneNumber("855-456.4545"));
console.log(validPhoneNumber("1800-254-9898"));
console.log(validPhoneNumber("+18005254545"));
console.log(validPhoneNumber("8888-254-4545"));
console.log(validPhoneNumber("1-800-4545-4454"));
console.log(validPhoneNumber("541-2525"));
console.log(validPhoneNumber("abcdedss"));
console.log(validPhoneNumber("abd-800-254-2254"));
console.log(validPhoneNumber("-8-8-8-2-5-4-1-1-1-5"));
console.log(validPhoneNumber("-9-8-8-8-2-5-4-1-1-1-5"));