
//accepted method only
let reverse =function(x){
    return(
        parseFloat(
            x
            .toString()
            .split('')
            .reverse()
            .join('')
            ) * Math.sign(x)
    )
};

//Accepted and submitted method as well
const reverse = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

{/*
    If the original input is below 0 then we multiply the output of the revere operation by -1 to make it negative.
I think line 5 just says that if we have gone over the max integer value then return 0 else return the reversed value multiplied by 1 or -1 (to determine negative or positive)
*/}


