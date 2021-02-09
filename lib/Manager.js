//extend Employee class

//additional methods: officeNumber, getRole() - overridden to return Manager

const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name='') {
        super(name);
    }
    officeNumber() {

    };
    getRole() {

    };
};