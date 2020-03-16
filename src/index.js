module.exports = function check(str, bracketsConfig) {

    let bracketsConfigLeght = bracketsConfig.length;
    let strLeght = str.length;

    for (let i = 0; i < strLeght; i++) {
        for (let j = 0; j < bracketsConfigLeght; j++) {
            let currentBracketsConfig = bracketsConfig[j][0] + bracketsConfig[j][1];
            if (str.includes(currentBracketsConfig)) {
                str = str.replace((currentBracketsConfig), '');
            }
        }
    }
    if (str === '') {
        return true
    } else {
        return false
    }
};