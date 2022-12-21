//Q.Find the largest element in an array.

function max(arr){
    let max = arr[0];

    for(let i=0; i<=arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }console.log(max)
}max(1,2,3,4)








// assignment - find 2nd largest element  in array 