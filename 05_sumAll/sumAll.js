const sumAll = function(a,b) {
//check if parameters are integer and non-negative
if ((Number.isInteger(a) && Number.isInteger(b)) && (a >= 0 && b >= 0)){
    const first_num = (a < b)? a: b;
    const last_num = (a > b)? a: b;
    let sum = 0;
    for (i = first_num; i <= last_num; i++){
        sum += i;
    }
    return sum;
} else {return 'ERROR';}
};

// Do not edit below this line
module.exports = sumAll;
