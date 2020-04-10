/******************************************************************************************
 *                        CODEWARS CREATE PHONE NUMBERS CHALLENGE                         *
 *                                                                                        *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns  *
 * a string of those numbers in the form of a phone number.                               *
 * The returned format must be correct in order to complete this challenge.               *
 * Don't forget the space after the closing parentheses!                                  *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]                                                *
 * Output 1: "(123) 456-7890"                                                             *
 *                                                                                        *
 * Input 2: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]                                                *
 * Output 2: "(111) 111-1111"                                                             *
 *                                                                                        *
 * Input 3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]                                                *
 * Output 3: "(123) 456-7890"                                                             *
 *****************************************************************************************/

function createPhoneNumber(numbers) {
  let phoneNumber = new String("(");

  for (let i = 0; i < numbers.length; i++) {
    phoneNumber += numbers[i];
    if (i === 2) {
      phoneNumber += ") ";
    }
    if (i === 5) {
      phoneNumber += "-";
    }
  }
  return phoneNumber;
}
