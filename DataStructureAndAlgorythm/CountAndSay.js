/**
 * @param {number} n
 * @return {string}
 */
let num=1;
let tmp="";
var countAndSay = function(n) {
        if(n==1){
            return num.toString();
        }
        num = num.toString();
        let cnt =0;
        for(var  i = 0, len = num.length; i < len; i++){
            if(num[i]==num[i+1]){
                cnt++;
            }else{
                cnt++;
                tmp += cnt.toString()+num[i];
                cnt=0;
            }
        }
        n--;
        num=tmp;
        tmp="";
        return countAndSay(n);
};

console.log(countAndSay(2));