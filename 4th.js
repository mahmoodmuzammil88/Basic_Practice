// Q.average sum of Element of an array
// sum of array / length of array

function ave(arr){
let sum =0 
for(let i=0;i<arr.length;i++){
    sum += arr[i]
}
return sum/arr.length
}console.log(ave([1,2,3,4,5,6]))