/******************************************************************************************
 *                 CODEWARS MOST FREQUENTLY USED WORD IN A TEXT CHALLENGE                 *
 *                                                                                        *
 * Problem Statement                                                                      *
 * Write a function that, given a string of text (possibly with punctuation & line-breaks)*
 * returns an array of the top-3 most occurring words, in descending order of the number  *
 * of occurrences.                                                                        *
 *                                                                                        *
 * Assumptions:                                                                           *
 * A word is a string of letters(A to Z) optionally containing one or more apostrophes (')*
 * in ASCII. (No need to handle fancy punctuation.)                                       *
 *                                                                                        *
 * Matches should be case-insensitive, and the words in the result should be lowercased.  *
 *                                                                                        *
 * Ties may be broken arbitrarily.                                                        *
 *                                                                                        *
 * If a text contains fewer than three unique words, then either the top-2 or top-1 words *
 * should be returned, or an empty array if a text contains no words.                     *
 *                                                                                        *
 * Test Cases                                                                             *
 * Input 1: "a a a  b  c c  d d d d  e e e e e"                                           *
 * Output 1: ['e','d','a']                                                                *
 *                                                                                        *
 * Input 2: "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"                       *
 * Output 2: ['e','ddd','aa']                                                             *
 *                                                                                        *
 *****************************************************************************************/

function topThreeWords(string) {
    string = string.toLowerCase().trim();
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    if(string.length == 0) return [];
    string = string.toLowerCase().trim();
    if(string === `'`) return [];
    let uniqueElementArray = [...new Set(string.split(/\s+/).sort())];
    let arr = string.split(' ');
    let wordLengthArray = new Array();
    let count = 0;
    let answer = [];

    for(let i=0; i<uniqueElementArray.length; i++) {
        for(let j=0; j<arr.length; j++){
        if(uniqueElementArray[i] === arr[j]) count++;
        }
        wordLengthArray.push(new Array(count, uniqueElementArray[i]));
        count = 0;
    }

    wordLengthArray.sort(function(a,b) {
        return b[0]-a[0];
    });

    for(let i=0; i<wordLengthArray.length; i++) if(i<3) answer.push(wordLengthArray[i][1]);

    return answer;
}