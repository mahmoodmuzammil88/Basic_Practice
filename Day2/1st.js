// // Objects

// let person = {
//     age:'12',
//     name:'javascript',
//     L_name:'language',
//     P_number:{
//         mobile:'1234567890',
//         landline:'123456'
//     },
//     callingMethod: function(){
//         return(`The name of the person is ${person.name}`);
//     }
// }
// console.log(person.callingMethod());
// console.log(person.P_number.mobile);


function person(age, name, l_name){
    this.age = age;
    this.name = name;
    this.l_name = l_name;
}

function person(l_name){
    this.l_name = l_name;
}

let ob11 = new person(18,"mahmood","ali")
// let ob22 = new person(14,"muzammil","uddin")

let ob33 = new person("abdul") 
// here its message overloading

console.log(ob11.age)
