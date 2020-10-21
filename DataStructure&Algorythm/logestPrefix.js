/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let compareWord = strs[0];
    if(!strs.length) return "";
    
    for(var i =0, len = compareWord.length; i < len; i++){
        for(let element of strs){
            if(compareWord[i]!==element[i]) return compareWord.slice(0,i);
        }
    }
    return compareWord;
};