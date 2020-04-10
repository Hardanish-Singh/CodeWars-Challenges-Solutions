/******************************************************************************************
 * CODEWARS FIND THE DIFFERENCE IN AGE BETWEEN OLDEST & YOUNGEST FAMILY MEMBERS CHALLENGE *
 *                                                                                        *
 * URL: https://www.codewars.com/kata/5720a1cb65a504fdff0003e2                            *
 *                                                                                        *
 * Problem Statement                                                                      *
 * At the annual family gathering, the family likes to find the oldest living family      *
 * member’s age & the youngest family member’s age & calculate the difference between them*
 * You will be given an array of all the family members' ages, in any order. The ages will*
 * be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.    *
 * Return a new array (a tuple in Python) with [youngest age, oldest age, difference      *
 * between the youngest and oldest age].                                                  *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: [82, 15, 6, 38, 35]                                                           *
 * Output 1: [6, 82, 76]                                                                  *
 *                                                                                        *
 * Input 2: [57, 99, 14, 32]                                                              *
 * Output 2: [14, 99, 85]                                                                 *
 *****************************************************************************************/

function differenceInAges(ages) {
  ages = ages.sort((a, b) => a - b);
  let sortedArray = [];
  sortedArray.push(ages[0]);
  sortedArray.push(ages[ages.length - 1]);
  sortedArray.push(ages[ages.length - 1] - ages[0]);
  return sortedArray;
}
