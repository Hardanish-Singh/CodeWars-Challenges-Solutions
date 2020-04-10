/******************************************************************************************
 *            CODEWARS PRODUCT OF CONSECUTIVE FIBONACCI NUMBERS CHALLENGE                 *
 *                                                                                        *
 * Problem Statement                                                                      *
 * The Fibonacci numbers are the numbers in the following integer sequence (Fn):          *
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...                                 *
 * such as: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.                            *
 * Given a number, say prod (for product), we search two Fibonacci numbers F(n) & F(n+1)  *
 * verifying F(n) * F(n+1) = prod.                                                        *
 * Your function productFib takes an integer (prod) and returns an array:                 *
 * [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)                      *
 * depending on the language if F(n) * F(n+1) = prod.                                     *
 * If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return   *
 * [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)                    *
 * F(m) being the smallest one such as F(m) * F(m+1) > prod.                              *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: 4895                                                                          *
 * Output 1: [55, 89, true]                                                               *
 *                                                                                        *
 * Input 2: 193864606                                                                     *
 * Output 2: [10946, 17711, true]                                                         *
 *                                                                                        *
 * Input 3: 84049690                                                                      *
 * Output 3: [10946, 17711, false]                                                        *
 *                                                                                        *
 *****************************************************************************************/

function productFib(prod) {
  let fibonacciArray = [];
  let fibonacciConsecutiveArray = [];

  for (let i = 0; i < prod; i++) {
    if (fibonacciArray.length < 2) {
      fibonacciArray.push(i);
    } else {
      fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
      if (
        fibonacciArray[i - 1] * fibonacciArray[i - 2] === prod ||
        fibonacciArray[i - 1] * fibonacciArray[i - 2] >= prod
      ) {
        fibonacciConsecutiveArray.push(fibonacciArray[i - 2]);
        fibonacciConsecutiveArray.push(fibonacciArray[i - 1]);
        if (fibonacciArray[i - 1] * fibonacciArray[i - 2] === prod)
          fibonacciConsecutiveArray.push(true);
        else fibonacciConsecutiveArray.push(false);
        break;
      }
    }
  }
  return fibonacciConsecutiveArray;
}
