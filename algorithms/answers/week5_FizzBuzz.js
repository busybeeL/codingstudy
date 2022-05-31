function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
      // Is the number a multiple of 5?
    } else if (i % 5 === 0) {
      console.log('buzz');
      // Is the number a none of above?
    } else {
      console.log(i);
    }
  }
}
