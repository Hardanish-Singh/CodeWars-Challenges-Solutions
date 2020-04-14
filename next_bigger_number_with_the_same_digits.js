/******************************************************************************************
 *                 CODEWARS NEXT BIGGER NUMBER WITH SAME DIGITS CHALLENGE                 *
 *                                                                                        *
 * Problem Statement                                                                      *
 * You have to create a function that takes a positive integer number and returns the next*
 * bigger number formed by the same digits:                                               *
 *                                                                                        *
 * Test Cases                                                                             *
 * Input 1: 12                                                                            *
 * Output 1: 21                                                                           *
 *                                                                                        *
 * Input 2: 513                                                                           *
 * Output 2: 531                                                                          *
 *                                                                                        *
 * Input 3: 2017                                                                          *
 * Output 3: 2071                                                                         *
 *                                                                                        *
 * If no bigger number can be composed using those digits, return -1                      *
 *                                                                                        *
 * Input 4: 9                                                                             *
 * Output 4: -1                                                                           *
 *                                                                                        *
 * Input 5: 111                                                                           *
 * Output 5: -1                                                                           *
 *                                                                                        *
 *****************************************************************************************/

function nextBigger(n) {
  let flag = true;
  let N = String(n);
  for (let i = 0; i < N.length - 1; i++) {
    if (+N[i] >= +N[i + 1]) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  if (flag === true) return -1;

  let ans = 0;
  let s2 = String(n).split("").sort().join("");
  for (let i = n + 1; ; i++) {
    let s = String(i).split("").sort().join("");
    if (s2 == s) {
      ans = i;
      break;
    }
  }
  return ans;
}
