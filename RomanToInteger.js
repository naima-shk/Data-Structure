var romanToInt = function(s) {
    //First put the values in the Map one by one
    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])
    //Count from back to front, so grab the length
    let i = s.length - 1
    let result = map.get(s[i])
    //Count from back to front
    while (i > 0) {
        const now = map.get(s[i])
        const prv = map.get(s[i - 1])
        if (prv >= now) { // 
              result += prv
        } else {
              result -= prv
        }
        i--;
    }
    return result;
};