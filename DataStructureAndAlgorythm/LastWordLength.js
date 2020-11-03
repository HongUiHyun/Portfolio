/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordArray = s.split(' ');
    let result = wordArray[wordArray.length-1];
    for(var i = wordArray.length-1; 0 <= i; i--){
        if(wordArray[i]!=""){
            result = wordArray[i];
            break;
        }
    }
    return result.length;
}