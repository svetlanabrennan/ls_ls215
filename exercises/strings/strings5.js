// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

function swapCase(string) {
  return string.split("").map(chr => {
    if (chr === chr.toLowerCase()) {
      return chr.toUpperCase();
    } else {
      return chr.toLowerCase();
    }
  }).join("");
}

function swapCase(string) {
  return string.split("").map(chr => {
    return /[a-z]/.test(chr) ? chr.toUpperCase() : chr.toLowerCase();
  }).join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"