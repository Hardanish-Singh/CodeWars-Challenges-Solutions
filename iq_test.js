/******************************************************************************************
 *                              CODEWARS IQ TEST CHALLENGE                                *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Bob is preparing to pass IQ test. The most frequent task in this test is to find out   *
 * which one of the given numbers differs from the others. Bob observed that one number   *
 * usually differs from the others in evenness. Help Bob — to check his answers, he needs *
 * a program that among the given numbers finds one that is different in evenness, &      *
 * return a position of this number.                                                      *
 *                                                                                        *
 * Keep in mind that your task is to help Bob solve a real IQ test, which means indexes   *
 * of the elements start from 1 (not 0)                                                   *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: "2 4 7 8 10"                                                                  *
 * Output 1: 3                                                                            *
 *                                                                                        *
 * Input 2: "1 2 2"                                                                       *
 * Output 2: 1                                                                            *
 *                                                                                        *
 *****************************************************************************************/

function findLeastFrequentItem(evenOddArray) {
  let multiDimensionalArray = [];
  let temp = [];
  let backwardElementFound = false;
  let count = 0;

  for (let i = 0; i < evenOddArray.length; i++) {
    //CHECK BACKWARD ELEMENTS
    backwardElementFound = false;
    count = 0;
    temp = [];

    for (let b = 0; b < i; b++) {
      if (evenOddArray[i] === evenOddArray[b]) {
        backwardElementFound = true;
        break;
      }
    }
    if (backwardElementFound === true) continue;

    for (let j = i; j < evenOddArray.length; j++) {
      if (evenOddArray[i] === evenOddArray[j]) {
        count++;
      }
    }
    temp.push(evenOddArray[i]);
    temp.push(count);
    multiDimensionalArray.push(temp);
  }

  let leastFrequentCount = multiDimensionalArray[0][1];
  for (let i = 1; i < multiDimensionalArray.length; i++) {
    for (let j = 1; j < multiDimensionalArray[i].length; j++) {
      if (leastFrequentCount > multiDimensionalArray[i][j])
        leastFrequentCount = multiDimensionalArray[i][j];
    }
  }

  let leastFrequentItem;
  for (let i = 0; i < multiDimensionalArray.length; i++) {
    if (multiDimensionalArray[i][1] === leastFrequentCount) {
      leastFrequentItem = multiDimensionalArray[i][0];
      break;
    }
  }
  return leastFrequentItem;
}

function iqTest(numbers) {
  let splitNumbers = numbers.split(" ");
  let evenOddArray = [];

  for (let i = 0; i < splitNumbers.length; i++) {
    if (splitNumbers[i] % 2 === 0) evenOddArray.push(2);
    else evenOddArray.push(1);
  }

  let leastFrequentItem = findLeastFrequentItem(evenOddArray);

  return evenOddArray.indexOf(leastFrequentItem) + 1;
}
