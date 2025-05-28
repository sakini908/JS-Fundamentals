#!/usr/bin/node

function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1; // Factorial is not typically defined for negative numbers. Returning 1 as per example for NaN.
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const num = Number(process.argv[2]);

console.log(factorial(num));
