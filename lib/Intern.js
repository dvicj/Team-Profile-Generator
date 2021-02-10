const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.internSchool = internSchool; 
        this.title = "Intern";
    }
    getSchool() {
        return this.internSchool;
    };
    getRole() {
        return this.title;
    };
};

module.exports = Intern; 