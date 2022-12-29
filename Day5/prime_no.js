let num = 2
let flag = false
if (num === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (num > 1) {
for (let i = 2; i<=num/2; i++)
{
    if(num%i==0)
    {
        flag= true
        break
    }
}
if(flag)
     console.log(" it is a not prime number");
else
    console.log("it is a prime number");
}
// --------------------------------------------------------------------
// if (n === 1) 
// return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;

// function prime(n) {
//     if (n == 1) return false;
//     for (let i=2; i*i<=n; i++) {
//         if (n%i==0) return ${n} is Not a prime number;
//         return ${n} is a prime number;
//     }
//    return ${n} is a prime number;

// }
// console.log(prime(7));