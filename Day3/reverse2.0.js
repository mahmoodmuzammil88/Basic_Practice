let arr2 = [1, 2, 3, 4, 5];

console.log(arr2);
console.log(reverseA(arr2));

function reverseA(array) {
    let n = array.length;
    let i=n-1;
    while (i>=0) {
        let j = n-1-i;

        if(i==j || j == i+1) return array
        while(j<n){
            x = array[j]
            array[j] = array[i];
            array[i] = x
            break
        }
       i--; 
    }

}