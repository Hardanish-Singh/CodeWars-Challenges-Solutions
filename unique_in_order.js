/******************************************************************************************
 *                        CODEWARS UNIQUE IN ORDER CHALLENGE                              *
 *                                                                                        *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Implement the function unique_in_order which takes as argument a sequence and returns a*
 * list of items without any elements with the same value next to each other & preserving *
 * the original order of elements.                                                        *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: "AAAABBBCCDAABBB"                                                             *
 * Output 1: ['A', 'B', 'C', 'D', 'A', 'B']                                               *
 *                                                                                        *
 * Input 2: "ABBCcAD"                                                                     *
 * Output 2: ['A', 'B', 'C', 'c', 'A', 'D']                                               *
 *                                                                                        *
 * Input 3: [1,2,2,3,3]                                                                   *
 * Output 3: [1, 2, 3]                                                                    *
 *****************************************************************************************/

var uniqueInOrder = function (iterable) {
  let iterableArray = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) iterableArray.push(iterable[i]);
  }

  return iterableArray;
};
