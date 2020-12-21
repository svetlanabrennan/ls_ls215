/*

fib = [0, 1]
[fib[1], fib[0] + fib[1]] => [1, 0 + 1] => [1, 1];
[[fib[1], fib[0] + fib[1]] => [1, 2];
[2, 1 + 2] => [2, 3];
[3, 2 + 3] = [3, 5]
[5, 3 + 5] = [5, 8];
[8, 5 + 8] = [8, 13]


*/

function fibonacci(n) {
  let fib = [1, 1];

  if (n <= 2) {
    return fib2;
  } else {
    let count = 3;
    while (count <= n) {
      fib = [fib[1], fib[0] + fib[1]];
      count += 1;
    }
  }
  return fib[1];
}

console.log(fibonacci(20));
console.log(fibonacci(50));