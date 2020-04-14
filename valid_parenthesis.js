/******************************************************************************************
 *                          CODEWARS VALID PARENTHESIS CHALLENGE                          *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Write a function called that takes a string of parentheses, and determines if the order*
 * of the parentheses is valid. The function should return true if the string is valid, & *
 * false if it's invalid.                                                                 *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: ()                                                                            *
 * Output 1: true                                                                         *
 *                                                                                        *
 * Input 2: )(()))                                                                        *
 * Output 2: false                                                                        *
 *                                                                                        *
 * Input 3: (                                                                             *
 * Output 3: false                                                                        *
 *                                                                                        *
 * Input 4: (())((()())())                                                                *
 * Output 4: true                                                                         *
 *****************************************************************************************/
function validParentheses(parens) {
  let parensCount = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == "(") parensCount++;
    else if (parens[i] == ")") parensCount--;
    if (parensCount < 0) return false;
  }

  if (parensCount === 0) return true;
  else return false;
}
