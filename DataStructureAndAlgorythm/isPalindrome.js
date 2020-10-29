/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(Math.sign(x)==-1 || (x%10==0&&x!=0)){
        return false;
    }else if(x==0){
        return true;
    }
    const MAX_INT = Math.pow(2,31)-1;
    const MIN_INT = Math.pow(-2,31);
    let result= 0;
    let tmp = x;
    while(x>result){
        result= result*10 +Math.floor(tmp%10);
        tmp/=10;
    }
    return result==x?true:false
};