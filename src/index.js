module.exports = function reverse (n) {
    let result = '';
    let nPos = Math.abs(n);
    let str = String(nPos);
    for(let i = str.length - 1; i >= 0 ; i--){
        result = result + str[i];
    }
    return Number(result);
}
