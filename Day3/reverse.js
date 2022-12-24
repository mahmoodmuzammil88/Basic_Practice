
let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(reverseA(arr));

function reverseA(array) {
    let arr2 = [];
    let n = array.length;
    let ind = 0;
    for (let i = n - 1; i >= 0; i--) {
        arr2[ind++] = array[i]; 
    }
    return arr2

}