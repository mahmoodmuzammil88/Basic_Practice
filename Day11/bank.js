// class student{
//     constructor(emp,emp_name, emp_id, emp_yoj){
//         this.emp = emp
//         this.emp_name = emp_name;
//         this.emp_emp_id = emp_id;
//         this.emp_yoj = emp_yoj;
//     }
// }
class bankEmpys{
    constructor(empName,empId,branch,yrOfjoin){
        this.empName = empName;
        this.empId = empId;
        this.branch = branch;
        this.yrOfjoin = yrOfjoin;
    }
    empDetails(){
        console.log(Name of employee is {this.empName},
             emplyee id is {this.empId},
              Branch of employee is ${this.branch},
               joining of emplyee is${this.yrOfjoin})
    }
}

const employee1 = new bankEmpys("Nizam",12345,"Mehdipatnam",2001);
console.log(employee1.empDetails());