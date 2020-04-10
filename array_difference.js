/******************************************************************************************
 *                        CODEWARS ARRAY DIFFERENCE CHALLENGE                             *
 *                                                                                        *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Your goal in this kata is to implement a difference function, which subtracts one list *
 * from another and returns the result. It should remove all values from list a, which are*
 * present in list b.                                                                     *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: arrayDiff([], [4,5])                                                          *
 * Output 1: []                                                                           *
 *                                                                                        *
 * Input 2: arrayDiff([3,4], [3])                                                         *
 * Output 2: [4]                                                                          *
 *                                                                                        *
 * Input 3: arrayDiff([1,8,2], [])                                                        *
 * Output 3: [1, 8, 2]                                                                    *
 *                                                                                        *
 *****************************************************************************************/

function arrayDiff(a, b) {
  let arrayIntersection = [];
  let elementFound = false;
  if (a.length === 0) return arrayIntersection;
  if (b.length === 0) return a;

  for (let i = 0; i < a.length; i++) {
    elementFound = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        elementFound = true;
        break;
      }
    }
    if (elementFound === false) arrayIntersection.push(a[i]);
  }

  return arrayIntersection;
}
