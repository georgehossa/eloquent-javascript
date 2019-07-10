/* for (let i = 0; i < 100; i += 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
} */
for (let i = 0; i < 100; i += 1) {
  i % 3 === 0 && i % 5 === 0
    ? console.log('FizzBuzz')
    : i % 3 === 0
    ? console.log('Fizz')
    : i % 5 === 0
    ? console.log('Buzz')
    : console.log(i);
}
