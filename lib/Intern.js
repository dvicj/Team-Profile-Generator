//extend Employee class 

//additional methods: school, getSchool(), getRole() - overridden to return Intern

class Intern extends Employee {
    constructor(name='') {
        super(name);
    }
    getchool() {
        return `The intern's school is ${this.school}`;
    };
    getRole() {
        return `The employee's role is ${this.role}`;
    };
};
