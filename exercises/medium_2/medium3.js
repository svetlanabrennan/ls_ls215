/*
input: integers 
output: string of triangle type

rules:
  right: 1 angle is 90 degrees
  acute: 3 angles < 90 degrees
  obtuse: 1 > 90 degrees

  valid triangle: sum of all angles === 180 AND every angle > 0

  take the 3 angles of a triangle and return a string that represents the triangle clasification

test cases:

  triangle(60, 70, 50);       // "acute"
  triangle(30, 90, 60);       // "right"
  triangle(120, 50, 10);      // "obtuse"
  triangle(0, 90, 90);        // "invalid"
  triangle(50, 50, 50);       // "invalid"
  triangle(0, 0, 0) // invalid

algo:

create an array with the 3 angles as elements
check if 3 angles are valid (subprocess)
  use "every" method to check if all angles > 0
  if not, return false
  if yes, 
    use reduce to get the sum of all angles and check if it's === 180
    if yes, return true
    if no, return false

  if valid do this: check the type of angle (subprocess)
    if all 3 angles are < 90 return acute (use every method)
    if one angle is === 90 return right (use filter method that checks for a number that equals 90 and get the length of filtered array)
    else return obtuse

  if not valid, return "invalid"

*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (validTriangle(angles)) {
    return (triangleClassified(angles));
  } else {
    return "invalid";
  }
}

function triangleClassified(array) {
  if (array.every(angle => angle < 90)) {
    return "Acute";
  } else if (array.some(angle => angle === 90)) {
    return "Right";
  } else {
    return "Obtuse";
  }
}

function validTriangle(array) {
  if (array.every(angle => angle > 0)) {
    let sum = array.reduce((prev, curr) => prev + curr);
    return sum === 180;
  } else {
    return false;
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(0, 0, 0)); // invalid