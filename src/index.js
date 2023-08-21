module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) { return false; } // checking pair

    let stack = [];

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (stack[stack.length - 1] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) { stack.pop(); } 
        else {
          if (str[i] === bracketsConfig[j][0]) { stack.push(str[i]); }
        }
      }
    }
    return (stack.length === 0);
}


