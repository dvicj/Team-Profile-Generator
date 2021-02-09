//extend Employee class

//additional methods: officeNumber, getRole() - overridden to return Manager

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, managerNumber) {
        super(name, id, email);
        this.managerNumber = managerNumber; 
        this.title = "Manager";
    }

    getOfficeNumber() {
        return this.managerNumber; 
    };
    getRole() {
        return this.title;
    };
};

module.exports = Manager; 