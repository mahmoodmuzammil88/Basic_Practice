// let obj= {};
// let arr = [1,4,2,44,6,4,2]
// for(let i of arr){
//     if(obj[i]){
//         obj[i]+=1;
//     }
//     else{
//         obj[i]=1;
//     }
// }

// ----------------------------------------------------------

// console.log(3^3)
// console.log(9^5)
// console.log(12^0)
// console.log(12^3)
// console.log(15^9)
// console.log(6^0)
// console.log(6^3)

// -------------------------------------------------------------
// [9,5,0,3,9,0,3] uding this array write xor gate problem

// function fun(arr) {
//     let obj = {};
  
//     for (let i of arr) {
//       obj[i] = obj[i] + 1 || 1;
//     }
//     for (let i in obj) {
//       if (obj[i] === 1) {
//         console.log("result", i);
//       }
//     }
//   }fun([9,5,0,3,9,0,3])
//   This solution is also O(n), right

// ---------------------------------------------------------
//[1,33,4,33,5,4,1, 5,7]find the non repeating element inn arrar

// function bitManupulationFindDublicate(arr) {
//     let xor = 0;
//     for (let i of arr) {
//       xor = xor ^ i;
//     }
//     console.log(xor);
//   }bitManupulationFindDublicate([1,33,4,33,5,4,1, 5,7])

// ---------------------------------------------------------
// linear search
// function linear(arr, target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target) return i
//     }return -1
// }console.log(linear([2,3,3,5,6,7],2))

