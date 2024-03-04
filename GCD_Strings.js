function isValidDivisor(x, str1, str2) {
    var y = x;
    while (x.length < str1.length && x.length < str2.length) {
        x += y;
        console.log("for first time: ", x);
    }
    if (x === str1) {
        while (x.length < str2.length) {
            x += y;
            console.log(x);
        }
        if (x === str2)
            return true;
    }
    if (x === str2) {
        while (x.length < str1.length) {
            x += y;
            console.log(x);
        }
        if (x === str1)
            return true;
    }
    return false;
}
console.log(isValidDivisor("ABC", "ABC", "ABCABC"));
