// var search = function(nums, target) {
//     let l = 0;
//     let r = nums.length-1;
//     while(l<=r){
//         let mid = Math.floor((l+r)/2);

//         if(nums[mid]===target) return mid;
//         else if(nums[mid]<target){
//             l = mid+1
//         }
//         else r = mid-1
//     }return -1;
// };search([-1,0,3,5,9,12],9)
