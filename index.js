const employee = {
    name : "Charlie Day",
    streetAddress : "6996",

}
function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return {
        ...employeeObj,
        [key]: value
    }

}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value
    return employeeObj


}
function deleteFromEmployeeByKey(employeeObj, key){
    const deleteByKey = {...employeeObj}
    delete deleteByKey[key]
    return deleteByKey
 
}
function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key]
    return employeeObj
}
