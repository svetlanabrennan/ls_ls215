// // 1. Total Area
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// function totalArea(array) {
//   return array.map(arr => {
//     return arr[0] * arr[1];
//   }).reduce((prev, curr) => prev + curr);
// }


// console.log(totalArea(rectangles));    // 141

// 2. Total Square Area

// function totalSquareArea(array) {
//   return array.filter(arr => arr[0] === arr[1])
//     .map(arr => arr[0] * arr[0])
//     .reduce((prev, curr) => prev + curr);
// }

// console.log(totalSquareArea(rectangles));    // 121

//. 3

// let newReleases = [
//   {
//     'id': 0,
//     'title': 'Die Hard',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 654356453,
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id: 432534, time: 65876586 }],
//   },
//   {
//     'title': 'The Chamber',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 675465,
//     'title': 'Fracture',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id: 432534, time: 65876586 }],
//   },
// ];

// function processReleaseData(data) {
//   return data.filter(obj => obj.id !== undefined && obj.title !== undefined)
//     .map(obj => ({ id: obj.id, title: obj.title }));
// }

// console.log(processReleaseData(newReleases));

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

//. 4

// function octalToDecimal(numberString) {
//   let sum = 0;
//   numberString.split("").reverse().forEach((chr, idx) => {
//     sum += (Number(chr) * Math.pow(8, idx));
//   });
//   return sum;
// }

// function octalToDecimal(numberString) {
//   return numberString.split("").reverse().reduce((prev, curr, idx) => {
//     return prev + (Number(curr) * Math.pow(8, idx));
//   }, 0);
// }

// console.log(octalToDecimal('1'));           // 1
// console.log(octalToDecimal('10'));          // 8
// console.log(octalToDecimal('130'));         // 88
// console.log(octalToDecimal('17'));          // 15
// console.log(octalToDecimal('2047'));        // 1063
// console.log(octalToDecimal('011'));         // 9

// 5.

// function anagram(word, list) {
//   word = word.split("").sort().join("");
//   return list.filter(element => {
//     let sorted = element.split("").sort().join("");
//     if (word === sorted) {
//       return element;
//     }
//   });
// }

// function anagram(word, list) {
//   return list.filter(element => {
//     if (element.length === word.length && element.split("").every(chr => {
//       return word.includes(chr)
//     })) {
//       return element;
//     }
//   });
// }

// console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
// console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

// 6. 

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(obj => {
    capitalize(obj);
    removeDots(obj);
    updateCountry(obj);
    return obj;
  });
}

function capitalize(obj) {
  obj.name = obj.name.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(" ");
}

function removeDots(obj) {
  obj.name = obj.name.replace(".", "");
}

function updateCountry(obj) {
  obj.country = obj.country = "Canada";
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]