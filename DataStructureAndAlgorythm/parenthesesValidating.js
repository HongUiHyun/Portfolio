/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    bracket_hash = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    let stack = [];
    s = s.split('');
    stack.push(s.shift());
    for(var i = 0, len = s.length; i < len; i++){
        if(bracket_hash[stack[stack.length-1]]==s[0]){
            stack.pop();
            s.shift();
        }else{
            stack.push(s.shift());
        }
    }
    return stack.length==0&&s.length==0?true:false;
};