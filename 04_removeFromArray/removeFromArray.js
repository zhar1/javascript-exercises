const removeFromArray = function(numbers, ...targets) {
  //create temporary array for return value 
  let new_arr = numbers;
  //loop through targets
  for (const target of targets){
    //filter current target out and assign to temporary array
    new_arr = new_arr.filter(notTarget);
    //returns value != target value
    function notTarget(num){
        if (num !== target){
            return num;
        }
    }
   }
 //returns final modified array
return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
