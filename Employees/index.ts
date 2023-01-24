
// static is used to keep the value of property or method same on creating every instance

class Employee{
    static _autoid: number = 0;
    _id!: number;
    _name!: string;

    constructor(name: string){
        this._name = name;
        // Employee._id = Employee._id + 1;
        this._id = Employee._autoid += 2;
        console.log(`${this._name} has an id ${this._id}`);
    }

    // print(){
        // console.log(`${this._name} has an id ${this._id}`);
    // }

}

// const person = 
new Employee('Hamza');
// person.print();
// const person1 = 
new Employee('Ali');
// person1.print();
// const person3 = 
new Employee('Saad');
// person3.print();
// const person4 = 
new Employee('Bakar');
new Employee('Aki');
// person4.print();