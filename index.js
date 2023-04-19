// Write your solution in this file!
const employee = {name:"Damon",streetaddress:"71 N Winooski"}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee, [key]:value}
console.log(newEmployee)
    console.log(employee, key, value)
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
    
}
 function  deleteFromEmployeeByKey(employee, key) {
    const newEmplyoee = {employee, key}
  delete  employee.key
  return newEmplyoee
 }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}