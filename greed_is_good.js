/******************************************************************************************
 *                          CODEWARS GREED IS GOOD CHALLENGE                              *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Greed is a dice game played with five six-sided dice. Your mission, should you choose  *
 * to accept it, is to score a throw according to these rules. You will always be given an*
 * array with five six-sided dice values                                                  *
 *                                                                                        *
 *       Three 1's  =>  1000 points                                                       *
 *       Three 6's  =>   600 points                                                       *
 *       Three 5's  =>   500 points                                                       *
 *       Three 4's  =>   400 points                                                       *
 *       Three 3's  =>   300 points                                                       *
 *       Three 2's  =>   200 points                                                       *
 *       One   1    =>   100 points                                                       *
 *       One   5    =>    50 point                                                        *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: [2, 3, 4, 6, 2]                                                               *
 * Output 1: 0                                                                            *
 *                                                                                        *
 * Input 2: [2, 3, 4, 6, 2]                                                               *
 * Output 2: 400                                                                          *
 *                                                                                        *
 * Input 3: [2, 4, 4, 5, 4]                                                               *
 * Output 3: 450                                                                          *
 *                                                                                        *
 *****************************************************************************************/

function countOccurrencesOfEachElement(dice) {
  let multiDimensionalArray = [];
  let temp = [];
  let backwardElementFound = false;
  let count = 0;

  for (let i = 0; i < dice.length; i++) {
    backwardElementFound = false;
    count = 0;
    temp = [];

    //CHECK BACKWARD ELEMENTS
    for (let b = 0; b < i; b++) {
      if (dice[i] === dice[b]) {
        backwardElementFound = true;
        break;
      }
    }
    if (backwardElementFound === true) continue;

    //COUNT OCCURENCES OF THE ELEMENT
    for (let j = i; j < dice.length; j++) if (dice[i] === dice[j]) count++;

    temp.push(dice[i]);
    temp.push(count);
    multiDimensionalArray.push(temp);
  }
  return multiDimensionalArray;
}

function getTotal(vals, incrementValue1, incrementValue2) {
  let total = 0;

  for (let i = 1; i <= vals; i++) {
    total += incrementValue2;
    if (i === 3) {
      total = 0;
      total += incrementValue1;
    }
  }

  return total;
}

function score(dice) {
  let countOccurrencesOfEachElementArray = countOccurrencesOfEachElement(dice);
  let t = 0;
  let total = 0;

  for (let i = 0; i < countOccurrencesOfEachElementArray.length; i++) {
    if (countOccurrencesOfEachElementArray[i][0] === 1) {
      total = getTotal(countOccurrencesOfEachElementArray[i][1], 1000, 100);
    } else if (countOccurrencesOfEachElementArray[i][0] === 6) {
      total = getTotal(countOccurrencesOfEachElementArray[i][1], 600, 0);
    } else if (countOccurrencesOfEachElementArray[i][0] === 5) {
      total = getTotal(countOccurrencesOfEachElementArray[i][1], 500, 50);
    } else if (countOccurrencesOfEachElementArray[i][0] === 4) {
      total = getTotal(countOccurrencesOfEachElementArray[i][1], 400, 0);
    } else if (countOccurrencesOfEachElementArray[i][0] === 3) {
      total = getTotal(countOccurrencesOfEachElementArray[i][1], 300, 0);
    } else if (countOccurrencesOfEachElementArray[i][0] === 2) {
      total = getTotal(countOccurrencesOfEachElementArray[i][1], 200, 0);
    }
    t += total;
  }
  return t;
}
