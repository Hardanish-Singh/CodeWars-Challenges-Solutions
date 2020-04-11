/******************************************************************************************
 *                        CODEWARS GAPS IN PRIME NUMBER CHALLENGE                         *
 *                                                                                        *
 * Problem Statement                                                                      *
 * The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1.      *
 * From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following *
 * pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43                           *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: gap(2,100,110)                                                                *
 * Output 1: [101, 103]                                                                   *
 *                                                                                        *
 * Input 2: gap(4,100,110)                                                                *
 * Output 2: [103, 107]                                                                   *
 *                                                                                        *
 * Input 3: gap(6,100,110)                                                                *
 * Output 3: null                                                                         *
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

function gap(g, m, n) {
  let isPrimeNumberArray = new Array();
  let gapInPrimeNumberArray = new Array();
  let index = 0;

  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      isPrimeNumberArray.push(i);
      if (
        isPrimeNumberArray.length > 1 &&
        isPrimeNumberArray[index] - isPrimeNumberArray[index - 1] === g
      ) {
        gapInPrimeNumberArray.push(isPrimeNumberArray[index - 1]);
        gapInPrimeNumberArray.push(isPrimeNumberArray[index]);
        break;
      }
      index++;
    }
  }

  return gapInPrimeNumberArray.length > 0 ? gapInPrimeNumberArray : null;
}
