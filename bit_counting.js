/******************************************************************************************
 *                            CODEWARS BIT COUNTING CHALLENGE                             *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Write a function that takes an integer as input, & returns the number of bits that are *
 * equal to one in the binary representation of that number. You can guarantee that input *
 * is non-negative.                                                                       *
 * Example: The binary representation of 1234 is 10011010010, so the function should      *
 * return 5 in this case                                                                  *
 *                                                                                        *
 *****************************************************************************************/

var countBits = function (n) {
  let countbits = 0;
  while (n > 0) {
    let rem = parseInt(n % 2);
    if (rem == 1) countbits++;
    n = parseInt(n / 2);
  }
  return countbits;
};
