/******************************************************************************************
 *                            CODEWARS BRUTEFORCE PIN CHALLENGE                           *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Alright, detective, one of our colleagues successfully observed our target person,     *
 * Robby the robber. We followed him to a secret warehouse, where we assume to find all   *
 * the stolen stuff. The door to this warehouse is secured by an electronic combination   *
 * lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.    *
 *                                                                                        *
 *                              The keypad has the following layout:                      *
 *                                                                                        *
 *                                     ┌───┬───┬───┐                                      *
 *                                     │ 1 │ 2 │ 3 │                                      *
 *                                     ├───┼───┼───┤                                      *
 *                                     │ 4 │ 5 │ 6 │                                      *
 *                                     ├───┼───┼───┤                                      *
 *                                     │ 7 │ 8 │ 9 │                                      *
 *                                     └───┼───┼───┘                                      *
 *                                         │ 0 │                                          *
 *                                         └───┘                                          *
 * He noted the PIN 1357, but he also said, it is possible that each of the digits he saw *
 * could actually be another adjacent digit (horizontally or vertically, but not          *
 * diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5   *
 * it could also be the 2, 4, 6 or 8.                                                     *
 *                                                                                        *
 * He also mentioned, he knows this kind of locks. You can enter an unlimited amount of   *
 * wrong PINs, they never finally lock the system or sound the alarm. That's why we can   *
 * try out all possible (*) variations.                                                   *
 *                                                                                        *
 * possible in sense: the observed PIN itself & all variations considering the adjacent   *
 * digits                                                                                 *
 *                                                                                        *
 * Can you help us to find all those variations? It would be nice to have a function, that*
 * returns an array (or a list in Java and C#) of all variations for an observed PIN with *
 * a length of 1 to 8 digits. We could name the function getPINs (get_pins in python,     *
 * GetPINs in C#). But please note that all PINs, the observed one and also the results,  *
 * must be strings, because of potentially leading '0's. We already prepared some test    *
 * cases for you.                                                                         *
 *                                                                                        *
 * Detective, we count on you!                                                            *
 *                                                                                        *
 * Test Cases                                                                             *
 * Input 1: "8"                                                                           *
 * Output 1: ["5", "7", "8", "9", "0"]                                                    *
 *                                                                                        *
 * Input 2: "11"                                                                          *
 * Output 2: ["11", "22", "44", "12", "21", "14", "41", "24", "42"]                       *
 *                                                                                        *
 * Input 3: "369"                                                                         *
 * Output 3: ["339","366","399","658","636","258","268","669","668","266","369","398",    *
 *           "256","296","259","368","638","396","238","356","659","639","666","359","336"*
 *           ,"299","338","696","269","358","656","698","699","298","236","239"]           *
 *****************************************************************************************/

function getAdjacentPairs(uniqueNumber) {
  let adjancentArray = [
    [1, 2, 4],
    [2, 1, 3, 5],
    [3, 2, 6],
    [4, 1, 5, 7],
    [5, 2, 8, 4, 6],
    [6, 3, 5, 9],
    [7, 4, 8],
    [8, 5, 0, 7, 9],
    [9, 6, 8],
    [0, 8],
  ];
  let returnadjancentArray = [];

  for (let i = 0; i < uniqueNumber.length; i++)
    for (let j = 0; j < adjancentArray.length; j++)
      if (uniqueNumber[i] == adjancentArray[j][0])
        returnadjancentArray.push(adjancentArray[j]);

  return returnadjancentArray;
}

function generatePINCombination(adjacentNumberArray) {
  let ans = [];
  let flag = 0;

  for (let i = 0; i < adjacentNumberArray.length; i++) {
    if (i != adjacentNumberArray.length - 1) {
      flag = 1;
      if (i === 0)
        ans = makeArrayCombination(
          adjacentNumberArray[i],
          adjacentNumberArray[i + 1]
        );
      else ans = makeArrayCombination(ans, adjacentNumberArray[i + 1]);
    } else if (flag === 0) ans = adjacentNumberArray[0].map((m) => String(m));
  }

  return ans;
}

function makeArrayCombination(arr1, arr2) {
  let temp = [];
  for (let i = 0; i < arr1.length; i++)
    for (let j = 0; j < arr2.length; j++)
      temp.push(String(arr1[i]) + String(arr2[j]));
  return temp;
}

function getPINs(observed) {
  let uniqueNumber = observed.split("");
  let adjacentNumberArray = getAdjacentPairs(uniqueNumber);
  let ans = generatePINCombination(adjacentNumberArray);
  return ans;
}
