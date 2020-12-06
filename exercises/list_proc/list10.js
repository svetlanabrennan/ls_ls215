// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

// get sum of quantity when movement is in
// gt sum of quantity when movement is out
// if sum out is greater than sum in return false;


const transactions = [{ id: 101, movement: 'in', quantity: 5 },
{ id: 105, movement: 'in', quantity: 10 },
{ id: 102, movement: 'out', quantity: 17 },
{ id: 101, movement: 'in', quantity: 12 },
{ id: 103, movement: 'out', quantity: 15 },
{ id: 102, movement: 'out', quantity: 15 },
{ id: 105, movement: 'in', quantity: 25 },
{ id: 101, movement: 'out', quantity: 18 },
{ id: 102, movement: 'in', quantity: 22 },
{ id: 103, movement: 'out', quantity: 15 },];

function transactionsFor(inventoryId, transactionsArr) {
  return transactionsArr.filter(obj => {
    if (inventoryId === obj.id) {
      return obj;
    }
  });
}

function isItemAvailable(inventoryID, transactionsObj) {
  let filtered = transactionsFor(inventoryID, transactionsObj);

  let sumIn = filtered.filter(obj => obj.movement === "in").reduce((prev, curr) => prev + curr.quantity, 0);
  let sumOut = filtered.filter(obj => obj.movement === "out").reduce((prev, curr) => prev + curr.quantity, 0);

  return sumOut > sumIn ? false : true;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true