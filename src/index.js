module.exports = function check(str, bracketsConfig) {
  let result = '';

  for (let i = 0; i < str.lenght; i++) {
    if (str[i] = ')') {result += 1;}
    if (str[i] = '(') {result -= 1;}
    if (str[i] = ']') {result += 1;}
    if (str[i] = '[') {result -= 1;}
  }
  if (result === 0) {return true;}
  else return false; 
}
