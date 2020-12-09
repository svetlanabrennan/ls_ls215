/*
input: two numbers via string
output: one number (0, 1 or -1 or null)

rules: 

  if inputs contain invalid chrs (anything but number or .) return null
  compare two input numbers
    - if version1 > version 2 return 1
    - if version 1 < version 2 return -1
    - if version 1 === version2 return 0

examples:

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

2.3.4 and 2.3.5

algo:

   if any input numbers have invalid chars return null
   split each number at . chr
   find the longest array (subprocess)
    => this will be used to control the loop
    => use Math.max to find the longest array length
   create a for loop so you can break out of it
   loop through each element in the longest array
   compare numbers (subprocess)
    => if current element in arr1 is larger than current element in arr2, return 1
    => if current element in arr1 is smaller than current element in arr2, retur -1
    => if both elements are equal continue with next loop

    => continue with loop repeating the comparison
    => if loop ended without return (breaking out of it) return 0 since this means version numbers are equal
*/

function compareVersions(version1, version2) {
  let regex = /^\d+(\.{1}\d+)*$/;

  if (!regex.test(version1) || !regex.test(version2)) {
    return null;
  }

  let arr1 = version1.split(".");
  let arr2 = version2.split(".");

  let longest = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < longest; i += 1) {
    let num1 = Number(arr1[i]) || 0;
    let num2 = Number(arr2[i]) || 0;

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1