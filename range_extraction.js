/******************************************************************************************
 *                            CODEWARS RANGE EXTRACTION CHALLENGE                         *
 *                                                                                        *
 * Problem Statement                                                                      *
 * A format for expressing an ordered list of integers is to use a comma separated list   *
 * of either                                                                              *
 * individual integers                                                                    *
 * or a range of integers denoted by the starting integer separated from the end integer  *
 * in the range by a dash, '-'. The range includes all integers in the interval including *
 * both endpoints. It is not considered a range unless it spans at least 3 numbers.       *
 * For example ("12, 13, 15-17")                                                          *
 * Complete the solution so that it takes a list of integers in increasing order & returns*
 * a correctly formatted string in the range format.                                      *
 *****************************************************************************************/

function solution(array){
    let sortedArray = array.sort((a, b) => {return a-b});
    let rangeExtraction = new String('');
    let rangeCount = 0;

    for(let i=0; i<sortedArray.length; i++){
        rangeCount = 0;
        if(sortedArray[i] + 1 !== sortedArray[i + 1]) {
            if(i!==sortedArray.length-1) rangeExtraction += sortedArray[i] + String.fromCharCode(44);
            else rangeExtraction += sortedArray[i];
        }	
        else if(sortedArray[i] + 1 === sortedArray[i + 1]) {
            for(var j=i; j<sortedArray.length; j++){
                rangeCount++;
                if(sortedArray[j] + 1 === sortedArray[j+1]) continue;      
                else break;
            }
            if(rangeCount >= 3){
                if(j!==sortedArray.length-1) rangeExtraction += sortedArray[i] + String.fromCharCode(45) + sortedArray[j] + String.fromCharCode(44);
                else rangeExtraction += sortedArray[i] + String.fromCharCode(45) + sortedArray[j];
                i = j;
            }
            else rangeExtraction += sortedArray[i] + String.fromCharCode(44);     
        }
    }
    return rangeExtraction;
}