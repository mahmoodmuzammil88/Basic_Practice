// let array = [1, 2, 5, 3, 4];

// let sortingBubble = (a) => {
//   let n = a.length;
//   console.log(n);
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       if (a[i] > a[j]) {
//         let swap = a[i];
//         a[i] = a[j];
//         a[j] = swap;
//       }
//     }
//   }
//   return a;
// };

// console.log(sortingBubble(array));

// let array = [1,19,5, 8, 6];

// let insertSorting = (a) => {
//   let n = a.length;
//   for (let i = 1; i < n; i++) {
//     let temp = a[i];
//     let j = i - 1;
//     for (; j >= 0; j--) {
//       if (temp < a[j]) {
//         a[j + 1] = a[j];
//       } else {
//         break;
//       }
//     }
//     a[j + 1] = temp;
//   }
//   return a;
// };

// console.log(insertSorting(array));

// function segregate0and1(arr, n)
//     {
//         let type0 = 0;
//         let type1 = n - 1;

//         while (type0 < type1)
//         {

//             if (arr[type0] == 1)
//             {

//                 // swap type0 and type1
//                 arr[type0] = arr[type0] + arr[type1];
//                 arr[type1] = arr[type0]-arr[type1];
//                 arr[type0] = arr[type0]-arr[type1];
//                 type1--;
//             }
//             else {
//                 type0++;
//             }
//         }
//     }

// // Driver Code

//     let arr = [1, 1, 1, 0, 1, 0, 0,
//                              1, 1, 1, 1 ];

//         segregate0and1(arr, arr.length);
//         for (let i = 0; i < arr.length; i++)
//             console.log(arr[i] + " ");

// let arr4 = [3, 3, 2, 2, 2, 0, 0];

// function Sorting(arr4) {
//   for (let i = 0; i < arr4.length; i++) {
//     for (let j = i + 1; j < arr4.length; j++) {
//       if (arr4[i] >= arr4[j]) {
//         let temp = arr4[i];
//         arr4[i] = arr4[j];
//         arr4[j] = temp;
//       }
//     }
//   }
//   return arr4;
// }
// console.log(Sorting(arr4));


let x = 10, y = 5;
 x = x + y;
y = x - y;
 x = x - y;
console.log("After Swapping: x =" + x + ", y=" + y);
 