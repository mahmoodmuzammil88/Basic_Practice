let nums = [1,2,45, 5,6]

var twoSum = function(nums, target) {
let sum =7;
    for(let i=0;i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
           sum = nums[i]+ nums[j];
           if(sum === target){
             return [i,j];
           } 
        }
    }
}