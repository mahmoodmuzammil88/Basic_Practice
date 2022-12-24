// class bank{
//     constructor(employee_name, id_no, unique_id, branch_id){
//         this.employee_name = employee_name;
//         this.id_no = id_no;
//         this.unique_id = unique_id;
//         this.branch_id = branch_id;
//     }
//     getdetails(){
//         console.log(`employee is ${this.employee_name}`);
//         console.log(`branch is ${this.branch_id}`)
//         console.log(`unique id is ${this.unique_id}`)
//     }
// }
// let sbi = new bank("ahmed", 1223, 2325)
// console.log(sbi.getdetails())

// no -- top- to -down parser 
function number(a,b,c,d){
    console.log("method with 4 parameter")
}
function number(a,b){
    console.log("method with 2 parameter")
}
function number(a,b,c){
    console.log("method with 3 parameter")
}
number()