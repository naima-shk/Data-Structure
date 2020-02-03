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

//Second solution 
const romanToInt = (s) => {
    // edge cases
    if(!s || s.length === 0) { return 0; }

    // map of roman numerals, values and priorities
    const romanMap = {
        'I' : { v: 1, i: 0},
        'V' : { v: 5, i: 1},
        'X' : { v: 10, i: 2},
        'L' : { v: 50, i: 3},
        'C' : { v: 100, i: 4},
        'D' : { v: 500, i: 5},
        'M' : { v: 1000, i: 6},
    }

    let result = 0;
    // iterate over string, and add roman numerals to result
    let i = 0;
    while(i < s.length) {
        const current = s[i];
        let next = s[i];
        // if we are not at the end, then get the real next
        if(i < s.length - 1) {
            next = s[i + 1];
        }
        
        // get actual value
        let converted = romanMap[current].v;
        if(isComposite(current, next, romanMap)) {
            converted = romanMap[next].v - romanMap[current].v
            // skip an extra one
            i++;
        }
        result += converted;
        i++;
    }

    return result;
};

const isComposite = (current, next, romanMap) => {
    if(romanMap[next].i > romanMap[current].i ) {
        return true;
    }

    return false;
}

const runTestCases = (testCases) => {
    testCases.forEach((testCase) => {
        const x = testCase[0];
        const expected = testCase[1];
        const actual = romanToInt(x);

        console.log(`for roman number ${x} expected integer is ${expected} actual is ${actual}`)
    });
};

const run = () => {
    const testCases = [
        ['III', 3],
        ['IV', 4],
        ['MCMXCIX', 1999],
        ['CXII', 112],
        ['', 0],
    ];

    runTestCases(testCases);
};

run();