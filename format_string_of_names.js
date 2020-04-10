/******************************************************************************************
 *                        CODEWARS FORMAT STRING OF NAMES CHALLENGE                       *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Given: an array containing hashes/objects of names, Return: a string formatted as a    *
 * list of names separated by commas except for the last two names, which should be       *
 * separated by an ampersand.                                                             *
 *                                                                                        *
 * Examples                                                                               *
 * Input 1: [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]                          *
 * Output 1: 'Bart, Lisa & Maggie'                                                        *
 *                                                                                        *
 * Input 2: [ {name: 'Bart'}, {name: 'Lisa'} ]                                            *
 * Output 2: 'Bart & Lisa'                                                                *
 *                                                                                        *
 * Input 3: [ {name: 'Bart'} ]                                                            *
 * Output 3: Bart                                                                         *
 *                                                                                        *
 * Input 4: []                                                                            *
 * Output 3: ''                                                                         *
 *****************************************************************************************/

function list(names) {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].name;
  let formattedString = new String("");
  for (let i = 0; i < names.length; i++) {
    if (i != names.length - 1) {
      if (i == names.length - 2)
        formattedString += names[i].name + String.fromCharCode(32);
      else
        formattedString +=
          names[i].name + String.fromCharCode(44) + String.fromCharCode(32);
    } else
      formattedString +=
        String.fromCharCode(38) + String.fromCharCode(32) + names[i].name;
  }
  return formattedString;
}
