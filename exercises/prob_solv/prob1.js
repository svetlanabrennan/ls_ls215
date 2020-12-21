/*
input: integer
output: array

rules:
  switches from 1 to n (n is the input number)

example: 5

start   false false false false false 
round 1 (true) (true) (true) (true) (true)
round 2 true (false) true (false) true 
round 3 true false (false) false true
round 4 true false false (true) true 
round 5 true false false true (false)
*/

function lightsOn(number) {
  let switches = Array(number).fill(false);

  for (let index = 0; index <= number; index += 1) { // n repetition

    for (let secondIndex = 0; secondIndex <= number - 1; secondIndex += 1) { // loops through each element in the array

      if ((secondIndex + 1) % index === 0) {
        switches[secondIndex] = !switches[secondIndex];
      }
    }
  }

  let result = [];

  switches.forEach((status, idx) => {
    if (status === true) {
      result.push(idx + 1);
    }
  });

  return result;
}

console.log(lightsOn(5));

