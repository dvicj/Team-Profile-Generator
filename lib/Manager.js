//extend Employee class

//additional methods: officeNumber, getRole() - overridden to return Manager

const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name='') {
        super(name);
    }
    officeNumber() {
        return `The manager's number is ${this.number}`;
    };
    getRole() {
        return `The employee's role is ${this.role}`;
    };
};

module.exports = Manager; 