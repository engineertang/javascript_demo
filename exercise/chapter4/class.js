'use strict'
// 1.create Object using class:  is syntax sugar for constructor function and prototype method
class Employee {
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // use prototype
    raiseSalary(){
        return this.age * 100;
    }
}

// 2. create Object using constructor function and prototype
function EmployeeOldStyle(name, age){
    this.name = name;
    this.age = age;
}

// EmployeeOldStyle.prototype is object equivalent as super class, due to property lookup by prototype chain
EmployeeOldStyle.prototype.raiseSalary = function raiseSalary(){
    return this.age * 100;
}

// 3. create Object using object literals, method is object property being a function. method name followed by parenthesis means execution
let harry = {
    name: 'Harry Smith',
    age: 33,
    raiseSalary: function() {
        return this.age * 100;
    }
  }

let objectProtype = {
    objectProtypeMethod: function (){console.log('every object could Protype Method')}
}
Object.setPrototypeOf(harry, objectProtype)
harry.objectProtypeMethod()


let donald = new Employee('donald', 33);
console.log(donald.name + " is " + donald.age + ' years old');

let niki = new EmployeeOldStyle('niki', 33)
console.log(niki.name + " is " + niki.age + ' years old');

console.log(harry.name + " has salary " + harry.raiseSalary())