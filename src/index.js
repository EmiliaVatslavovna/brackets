module.exports = function check(str, bracketsConfig) {
    let result = 0;
    for (let i = 0; i < str.lenght; i++) {

        if (str[i] = bracketsConfig[0][0]) { result++; }
        else if (str[i] = bracketsConfig[0][1]) { result--; }

        if (str[i] = bracketsConfig[1][0]) { result++; }
        else if (str[i] = bracketsConfig[1][1]) { result--; }

        if (str[i] = bracketsConfig[2][0]) { result++; }
        else if (str[i] = bracketsConfig[2][1]) { result--; }

        if (str[i] = bracketsConfig[3][0]) { result++; }
        else if (str[i] = bracketsConfig[1][1]) { result--; }

        if (str[i] = bracketsConfig[4][0]) { result++; }
        else if (str[i] = bracketsConfig[4][1]) { result--; }

        if (str[i] = bracketsConfig[5][0]) { result++; }
        else if (str[i] = bracketsConfig[5][1]) { result--; }
    }
    if (result === 0) { return true; }
    else return false;
}
