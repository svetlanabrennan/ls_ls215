// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

function buyFruit(nestedArr) {
  let result = [];
  nestedArr.forEach(arr => {
    for (let i = 1; i <= arr[1]; i += 1) {
      result.push(arr[0]);
    }
  });
  return result;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]