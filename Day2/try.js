class bank{
    constructor(employee_name, id_no, unique_id, branch_id){
        this.employee_name = employee_name;
        this.id_no = id_no;
        this.unique_id = unique_id;
        this.branch_id = branch_id;
    }
    getdetails(){
        console.log(`employee is ${this.employee_name}`);
        console.log(`branch is ${this.branch_id}`)
        console.log(`unique id is ${this.unique_id}`)
    }
}
let sbi = new bank("ahmed", 1223, 2325)
console.log(sbi.getdetails())