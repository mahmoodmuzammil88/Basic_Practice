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

// function findFirstOccu(arr, target) {
//     let start = 0;
//     let last = arr.length - 1;
//     let ans = 0;
  
//     while (start <= last) {
//       let mid = Math.floor((last + start) / 2);
//       if (arr[mid] === target) {
//         ans = mid;
//         last = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//     console.log(ans);
//   }

function changeBit(num, n) {
    let a = 1 << n;
    console.log(a);
    let res = num | a;
    console.log(res);
  }