let arr = [5,4,12,4,5,4]

function reverseA(arr){
    let arr2 = [];

    let n = arr.length-1
    let ind = 0
    for(i=n;i>=0;i--){
        arr2[ind++] = arr[i]
    }
    return arr2
}console.log(reverseA(arr));