// function reverse(string) {
//   return string.split("").reverse().join("");
// }

// console.log(reverse('hello'));                  // returns "olleh"
// console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"


// function acronym(string) {
//   return string.split(/[\- ]/).map(word => word[0].toUpperCase()).join("");
// }

// console.log(acronym('Portable Network Graphics'));                  // "PNG"
// console.log(acronym('First In, First Out'));                        // "FIFO"
// console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
// console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
// console.log(acronym('Hyper-text Markup Language'));                 // "HTML"


// The domain part must contain two or more components with a single dot (.) between each component. Each component must contain one or more letters (A-Z, a-z) only.


// function isValidEmail(email) {
//   if (isValid(email)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isValid(string) {
//   if ((string.match(/@/g) || []).length > 1) {
//     return false;
//   }

//   let local = string.split("@");
//   if ((local[0].match(/[^a-z0-9]/gi) || []).length > 0) {
//     return false;
//   }

//   if (local[1].match(/[\.]/gi) === null) {
//     return false;
//   }

//   let domain = local[1].split(".");

//   if (domain[1] === undefined || domain[1] === "") {
//     return false;
//   }

//   for (let i = 0; i < domain.length; i += 1) {
//     if ((domain[i].match(/[^a-z]/gi) || []).length > 1) {
//       return false;
//     }
//   }

//   return true;
// }

// function isValidEmail(url) {
//   if ((url.match(/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i) || []).length > 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
// console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
// console.log(isValidEmail('foo@baz.com'));             // returns true
// console.log(isValidEmail('foo@baz.ph'));              // returns true
// console.log(isValidEmail('HELLO123@baz'));            // returns false
// console.log(isValidEmail('foo.bar@baz.to'));          // returns false
// console.log(isValidEmail('foo@baz.'));                // returns false
// console.log(isValidEmail('foo_bat@baz'));             // returns false
// console.log(isValidEmail('foo@bar.a12'));             // returns false
// console.log(isValidEmail('foo_bar@baz.com'));         // returns false
// console.log(isValidEmail('foo@bar.....com'));         // returns false


function isBalanced(string) {
  let paren = string.split("").filter(chr => chr === "(" || chr === ")");

  let count = 0;

  for (let i = 0; i < paren.length; i += 1) {
    if (paren[i] === "(") {
      count += 1;
    } else {
      count -= 1;
      if (count < 0) {
        return false;
      }
    }
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false