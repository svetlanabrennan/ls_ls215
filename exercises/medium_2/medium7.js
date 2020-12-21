/*
input: array
output: sorted original array

rulse:
  sort the array in place using bubble sort
  how sort works:
    on each pass, compare two values of consecutive values
    if first value > second value then the two elements are swapped
    repeat until there is a pass where no swaps are performed

example:

  [6, 2, 7, 1, 4]; => [1, 2, 4, 6, 7]
  loop 1
    6 > 2, yes then index 0 = 2 and index 1 = 6
    break and repeat loop
    need a way to keep track if there was a swap
    [2, 6, 7, 1, 4]
    2 > 6 no then go to next comparison
    6 > 7 no then go to next comparison
    7 > 1 yes then index 2 = 1 and index 3 = 7
    [2, 6, 1, 7, 4]

questions:
  will there be different types of elements in array like digits, string, other chrs..etc?

test cases:
 ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']; //  ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
 [""]

 [1, 2, 3, 4, 5] // [1, 2, 3, 4, 5]
 ["bird", "apple", "zoo", "kite", "mouse"] // ["apple", "bird", "kite", "mouse", "zoo"];

 algo:

  1. create a while loop to keep restarting the loop when there was a swap
  2. create a variable called swapped and set it to false NOTE: you will change this to true when there was a swap in the next loop
  3. create a for loop with index set to 0
      => create a variable to assign value 1 to called val1
        val1 will be the element at the current loop index => exmaple array[0]
      => create a variable to assign value 2 to called val2
        val2 will be the element at the next index in the current loop => exmaple array[1]
      => compare: is val1 > val2
          if yes, then do this:
            the current index will equal the value at the next index
            the next index will equal the value at the current index
            change swapped variabl evalue to true
            break from for loop
          if no, do nothing
  4. If swapped is true, keep going with the while loop. If swapped is false, break from while loop
  5. return array
*/

// function bubbleSort(array) {
//   while (true) {
//     let swapped = false;

//     for (let idx = 0; idx <= array.length; idx += 1) {
//       let val1 = array[idx];
//       let val2 = array[idx + 1];

//       if (val1 > val2) {
//         array[idx] = val2;
//         array[idx + 1] = val1;
//         swapped = true;
//         break;
//       }
//     }

//     if (swapped === false) {
//       return array;
//     }
//   }
// }

function bubbleSort(array) {
  while (true) {
    let swapped = false;

    for (let idx = 0; idx <= array.length; idx += 1) {

      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        swapped = true;
        break;
      }
    }

    if (swapped === false) {
      return array;
    }
  }
}

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

const array4 = [1, 2, 3, 4, 5] // [1, 2, 3, 4, 5]
bubbleSort(array4);
console.log(array4);

const array5 = ["bird", "apple", "zoo", "kite", "mouse"] // ["apple", "bird", "kite", "mouse", "zoo"];
bubbleSort(array5);
console.log(array5);