
// const myArray = [1, 2, 3, 4, 5];

// const x = myArray.pop();

// console.log(` ${myArray}`);
// console.log(`${x}`);
// ------------------------------------------------------------

let arr = [2,4,6,8,10]
let target = 4;

console.log(arr);
console.log(deleteE(arr,target));

function deleteE(arr, target){
    let i = 0;
    let n = arr.length;
    for( ;i<n;i++){
        if(arr[i] == target)break;
    }
    if(i == n)return n;

    for(let j=i;j<n-1;i++){
        arr[j] = arr[j+1]
    }
    return arr;
}