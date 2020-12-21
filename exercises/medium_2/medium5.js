/*
input: integer
output: integer - next featured number

rules:
  featured number is this:

    odd number that is multiple of 7
    digits must occur once (133 is odd but 3 appears twice)

test cases:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(0) // 7;
featured(9876543201) // error

algo:
  1. find a multiple of 7 that is greater than input number (subprocess) and assign result to variable called "multiple"
      create a variable named start = 7;
      create a while loop
        if start > input number return start
        else start += 7;

  2. check if multiple is odd
      => guard clause: if multiple > 9876543201 return error
      => if odd, continue to next step
      => if even, add 7 to multiple and repeat step 2

  3. check if multiple has unique digits (subprocess)
      create a variable named digits 
      convert multiple to string, split at "" and assign to digits variable
      check if digit is unique (use another function for this)
         => if yes, return multiple
        => if no, add 7 to multiple and repeat step 2

        create a for loop (how to check if unique)
          if first index of chr in digits array is NOT EQUAL to last index of chr in digits array return false
          else return true
*/

// recursive solution
function featured(number) {
  let multiple = findMultiple(number);

  if (multiple > 9876543201) {
    return new Error("no next featured number");
  }

  if (multiple % 2 === 0) { // even
    multiple = featured(multiple); // note: can also replace this with while loop
  }

  if (!uniqueDigits(multiple)) {
    multiple = featured(multiple);
  }

  return multiple;
}


// without recursion solution
function featured(number) {
  let multiple = findMultiple(number);

  if (multiple > 9876543201) {
    return new Error("no next featured number");
  }

  if (multiple % 2 === 0) { // even
    while (true) {
      multiple += 7;
      if (multiple % 2 !== 0) {
        return multiple;
      }
    }
  }

  if (!uniqueDigits(multiple)) {
    while (true) {
      multiple += 7;
      if (multiple % 2 !== 0 && uniqueDigits(multiple)) {
        return multiple;
      }
    }
  }

  return multiple;
}

function uniqueDigits(num) {
  let digits = String(num).split("");
  for (let idx = 0; idx <= digits.length; idx += 1) {
    if (digits.indexOf(digits[idx]) !== digits.lastIndexOf(digits[idx])) {
      return false;
    }
  }
  return true;
}

function findMultiple(num) {
  let start = 7;
  while (true) {
    if (start > num) {
      return start;
    } else {
      start += 7;
    }
  }
}


console.log(featured(12));           // 21)
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(0)); // 7;
console.log(featured(9876543201)); // error
// console.log(featured(999999987));    // 1023456987