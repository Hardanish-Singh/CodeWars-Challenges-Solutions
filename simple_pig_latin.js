/******************************************************************************************
 *                        CODEWARS SIMPLE PIG LATIN CHALLENGE                             *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Move the first letter of each word to the end of it, then add "ay" to the end of the   *
 * word. Leave punctuation marks untouched.                                               *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: "Pig latin is cool"                                                           *
 * Output 1: igPay atinlay siay oolcay                                                    *
 *                                                                                        *
 * Input 2: "Hello world !"                                                               *
 * Output 2: elloHay orldway !                                                            *
 *                                                                                        *
 *****************************************************************************************/

function pigIt(str) {
  let simplePigLatin = new String("");
  let splitString = str.trim().split(" ");
  let puntuationFound = false;

  for (let i = 0; i < splitString.length; i++) {
    puntuationFound = false;
    for (let j = 0; j < splitString[i].length; j++) {
      if (
        splitString[i][j].toLowerCase() >= "a" &&
        splitString[i][j].toLowerCase() <= "z"
      ) {
        if (j > 0) simplePigLatin += splitString[i][j];
      } else {
        puntuationFound = true;
      }
    }
    if (puntuationFound === false) simplePigLatin += splitString[i][0] + "ay ";
    else simplePigLatin += splitString[i][0];
  }

  return simplePigLatin.trim();
}
