const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, engineerGit) {
        super(name, id, email);
        this.engineerGit = engineerGit; 
        this.title = "Engineer";
    }
    getGitHub() {
        return this.engineerGit;
    };
    getRole() {
        return this.title;
    };
};

module.exports = Engineer; 