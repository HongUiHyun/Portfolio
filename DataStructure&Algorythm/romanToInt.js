/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbol = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
        'IV':4,
        'IX':9,
        'XL':40,
        'XC':90,
        'CD':400,
        'CM':900
    }
    
    let total = 0,prev = 0,len=s.length,pos=0;
    
    for(var i =0; i<len;i++){
        let roman= symbol[s.substr(i,2)];
        if(roman){
            total+=roman;
            i++;
        }else{
            total+=symbol[s[i]]
        }
        
    }
    
    return total;
};