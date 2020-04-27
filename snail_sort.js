/******************************************************************************************
 *                            CODEWARS SNAIL SORT CHALLENGE                               *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Given an n x n array, return the array elements arranged from outermost elements to the*
 * middle element, traveling clockwise.                                                   *
 *                                                                                        *
 * array = [                                                                              *
 *           [1,2,3],                                                                     *
 *           [4,5,6],                                                                     *
 *           [7,8,9]                                                                      *
 *         ]                                                                              *
 *                                                                                        *
 * snail(array) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]                                           *
 *                                                                                        *
 * For better understanding, please follow the numbers of the next array consecutively:   *
 * array = [                                                                              *
 *           [1,2,3],                                                                     *
 *           [8,9,4],                                                                     *
 *           [7,6,5]                                                                      *
 *         ]                                                                              *
 *                                                                                        *
 * snail(array) #=> [1,2,3,4,5,6,7,8,9]                                                   *
 *                                                                                        *
 * NOTE: The idea is not sort the elements from the lowest value to the highest; the idea *
 * is to traverse the 2-d array in a clockwise snailshell pattern.                        *
 *                                                                                        *
 * NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].  *
 *                                                                                        *
 *****************************************************************************************/
snail = function (array) {
  if (array[0].length === 0) return [];
  let answer = [];
  answer = makeSnailMovement(array, answer);
  return answer;
};

function makeSnailMovement(array, answer) {
  let size = array.length;
  let moveSnailDirection = "right";
  let i = 0,
    j = 0;
  let temp = [];

  while (true) {
    if (moveSnailDirection === "right") {
      answer.push(array[i][j]);
      temp.push(new Array(i, j));
      if (j < size) j++;
      if (j === size) {
        moveSnailDirection = "down";
        j--;
      }
    } else if (moveSnailDirection === "down") {
      if (i < size) i++;
      if (i === size) {
        moveSnailDirection = "left";
        i--;
      } else {
        answer.push(array[i][j]);
        temp.push(new Array(i, j));
      }
    } else if (moveSnailDirection === "left") {
      if (j < size) j--;
      if (j < 0) {
        moveSnailDirection = "up";
        j++;
      } else {
        answer.push(array[i][j]);
        temp.push(new Array(i, j));
      }
    } else if (moveSnailDirection === "up") {
      if (i >= 1) i--;
      if (i == 0) break;
      answer.push(array[i][j]);
      temp.push(new Array(i, j));
      if (i == 1) break;
    }
  }

  let flag = false;
  let arr = [];
  let brr = [];
  let cc = 0;

  for (let m = 0; m < array.length; m++) {
    for (let n = 0; n < array.length; n++) {
      flag = false;
      for (let p = 0; p < temp.length; p++) {
        if (m == temp[p][0] && n == temp[p][1]) {
          flag = true;
          break;
        }
      }
      if (flag == false) {
        brr.push(array[m][n]);
        cc++;
      }
      if (cc == size - 2 && brr.length > 0) {
        cc = 0;
        arr.push(brr);
        brr = [];
      }
    }
  }
  if (arr.length > 1) makeSnailMovement(arr, answer);
  else if (arr.length === 1) answer.push(arr[0][0]);
  return answer;
}
