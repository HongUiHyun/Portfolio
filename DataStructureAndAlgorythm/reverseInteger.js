/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result= 0;
    const MAX_INT = Math.pow(2,31)-1;
    const MIN_INT = Math.pow(-2,31);
    while(parseInt(x)!=0){
        let pop = parseInt(x%10);
        x/=10;
        if(result>MAX_INT/10 || (result==MAX_INT/10 && pop >7))return 0;
        if(result<MIN_INT/10 || (result==MIN_INT/10 && pop <-8))return 0;
        result = result*10+pop;
    }
    return result;
};