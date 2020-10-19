module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let bigStr = [];
    for (i = 0; i < bracketsConfig.length; i++) {
        for (j = 0; j < bracketsConfig[i].length; j++) {
            arr += bracketsConfig[i][j];
        }
        bigStr.push(arr);
        arr = '';
    }

    for (let i = 0; i < bigStr.length; i++) {
        if (str.includes(bigStr[i])) {
            str = str.replace(bigStr[i], "");
            i = -1;
        }
    }

    if (str.length == 0) {
        return true;
    } else {
        return false;
    }
}