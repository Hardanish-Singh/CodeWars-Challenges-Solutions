/******************************************************************************************
 *                          CODEWARS STRING INCREMENTER CHALLENGE                         *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Your job is to write a function which increments a string, to create a new string.     *
 * If the string already ends with a number, the number should be incremented by 1.       *
 * If the string does not end with a number. the number 1 should be appended to the new   *
 * string.                                                                                *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: foobar000                                                                     *
 * Output 1: foobar001                                                                    *
 *                                                                                        *
 * Input 2: foo                                                                           *
 * Output 2: foo1                                                                         *
 *                                                                                        *
 * Input 3: ""                                                                            *
 * Output 3: 1                                                                            *
 *                                                                                        *
 *****************************************************************************************/

function incrementString(string) {
  let numStr = new String("");
  let str = new String("");

  for (let i = 0; i < string.length; i++) {
    if (Number(string[i]) >= 0) numStr += string[i];
    else str += string[i];
  }

  let vals = Number(numStr) + 1;
  let noOfDigits = 0;
  do noOfDigits++;
  while ((vals = parseInt(vals / 10)));

  let s = "";
  for (let i = 0; i < numStr.length - noOfDigits; i++) s += "0";
  s += String(Number(numStr) + 1);

  return str + s;
}
