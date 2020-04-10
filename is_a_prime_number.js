/******************************************************************************************
 *                        CODEWARS IS A PRIME NUMBER CHALLENGE                            *
 * Problem Statement                                                                      *
 * Define a function that takes an integer argument & returns logical value true or false *
 * depending on if the integer is a prime.                                                *
 *                                                                                        *
 *****************************************************************************************/

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  let isAPrimeNumber = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isAPrimeNumber = false;
      break;
    }
  }
  return isAPrimeNumber;
}
