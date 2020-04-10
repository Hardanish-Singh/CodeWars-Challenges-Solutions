/******************************************************************************************
 *                        CODEWARS ONES AND ZEROS CHALLENGE                               *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Given an array of ones and zeroes, convert the equivalent binary value to an integer.  *
 * Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.           *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: [0, 0, 0, 1]                                                                  *
 * Output 1: 1                                                                            *
 *                                                                                        *
 * Input 2: [1, 0, 0, 1]                                                                  *
 * Output 2: 9                                                                            *
 *                                                                                        *
 * Input 3: [1, 1, 1, 1]                                                                  *
 * Output 3: 15                                                                           *
 *****************************************************************************************/

const binaryArrayToNumber = (arr) => {
  let binarySum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 1) binarySum += Math.pow(2, arr.length - 1 - i);
  }

  return binarySum;
};
