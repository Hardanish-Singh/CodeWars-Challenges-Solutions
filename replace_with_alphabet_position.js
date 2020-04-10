/******************************************************************************************
 *                   CODEWARS REPLACE WITH ALPHABET POSITION CHALLENGE                    *
 *                                                                                        *
 * Problem Statement                                                                      *
 * In this kata you are required to, given a string, replace every letter with its        *
 * position in the alphabet. If anything in the text isn't a letter, ignore it & don't    *
 * return it. For example, "a" = 1, "b" = 2, etc.                                         *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: "The sunset sets at twelve o' clock."                                         *
 * Output 1: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"    *
 *                                                                                        *
 * Input 2: "The narwhal bacons at midnight."                                             *
 * Output 2: "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"            *
 *                                                                                        *
 *****************************************************************************************/

function alphabetPosition(text) {
  let positionString = new String("");

  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() >= "a" && text[i].toLowerCase() <= "z") {
      positionString += text.toLowerCase().charCodeAt(i) - 97 + 1 + " ";
    }
  }

  return positionString.trim();
}
