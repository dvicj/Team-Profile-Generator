//parent class

//methods: name, id, email, getName(), getId(), getEmail(), getRole() - returns Employee

class Employee {
    constructor(name, id, email) {
    this.name = name; 
    this.id = id; 
    this.title = "Employee"
    this.email = email; 
    }; 

    getName() {
        return this.name; 
    };

    getId() {
        return this.id; 
    };

    getEmail() {
        return this.email; 
    };

    getRole() {
        return this.title; 
    };
};

module.exports = Employee; 
