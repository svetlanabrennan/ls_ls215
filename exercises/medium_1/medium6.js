function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else {
    return fibonacci(nth - 1) + fibonacci(nth - 2);
  }
}


// fibonacci(1);       // 1
// fibonacci(2);       // 1
// fibonacci(3);       // 2
// fibonacci(4);       // 3
console.log(fibonacci(5));       // 5
// fibonacci(12);      // 144
// fibonacci(20);      // 6765