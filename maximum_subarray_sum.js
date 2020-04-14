/******************************************************************************************
 *                            CODEWARS MAXIMUM SUBARRAY SUM CHALLENGE                     *
 *                                                                                        *
 * Problem Statement                                                                      *
 * The maximum sum subarray problem consists in finding the maximum sum of a contiguous   *
 * subsequence in an array or list of integers:                                           *
 *                                                                                        *
 * Test Cases                                                                             *
 * Input 1: [-2, 1, -3, 4, -1, 2, 1, -5, 4]                                               *
 * Output 1: 6 ([4, -1, 2, 1])                                                            *
 *                                                                                        *
 * Easy case is when the list is made up of only positive numbers and the maximum sum is  *
 * the sum of the whole array. If the list is made up of only negative numbers, return 0  *
 * instead.                                                                               *
 *                                                                                        *
 * Empty list is considered to have zero greatest sum. Note that the empty list or array  *
 * is also a valid sublist/subarray.                                                      *
 *****************************************************************************************/

function generatePositiveSumIndexes(element, slicedArray, index) {
  let indexArray = new Array();
  let total = element;

  for (let i = 0; i < slicedArray.length; i++) {
    total += slicedArray[i];
    if (total >= 0) indexArray.push(i + index + 1);
  }

  return indexArray;
}

function generateArrayCombinations(index, indexArr, arr, multiArr) {
  for (let i = 0; i < indexArr.length; i++)
    multiArr.push(arr.slice(index, indexArr[i] + 1));
  return multiArr;
}

function findSumAndStoreIndex(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) sum += arr1[i];
  arr2.push(sum);
  return arr2;
}

var maxSequence = function (array) {
  //IF ARRAY IS EMPTY, RETURN 0
  if (array.length === 0) return 0;
  //CHECK IF ALL NUMBERS ARE NEGATIVES, IF YES, THEN RETURN 0
  let allNegatives = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      allNegatives = false;
      break;
    }
  }

  if (allNegatives === true) return 0;

  let multiDimensionalArray = [];
  let summedValueArray = [];

  for (let i = 0; i < array.length; i++) {
    let indexArray = generatePositiveSumIndexes(
      array[i],
      array.slice(i + 1),
      i
    );
    multiDimensionalArray = generateArrayCombinations(
      i,
      indexArray,
      array,
      multiDimensionalArray
    );
  }

  for (let i = 0; i < multiDimensionalArray.length; i++) {
    summedValueArray = findSumAndStoreIndex(
      multiDimensionalArray[i],
      summedValueArray
    );
  }

  let maximumValue = Math.max.apply(null, summedValueArray);
  //COMPARE THE MAXIMUM VALUE WITH ALL THE VALUES IN ARRAY
  for (let i = 0; i < array.length; i++) {
    if (maximumValue < array[i]) {
      maximumValue = array[i];
    }
  }

  return maximumValue;
};
