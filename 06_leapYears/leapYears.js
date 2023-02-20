const leapYears = function(a) {
let year = a;
//leap years are divisible by 4 but not by 100 or divisible by 400
if (((year%4 === 0) && (year%100 > 0)) || (year%400 === 0)){
    return true;
} else {return false;}
};

// Do not edit below this line
module.exports = leapYears;
