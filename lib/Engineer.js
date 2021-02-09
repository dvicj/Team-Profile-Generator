//extend Employee class 

//additional methods: github, gitGitHub(), getRole() - overridden to return Engineer

class Engineer extends Employee {
    constructor(name='') {
        super(name);
    }
    getGitHub() {
        return `The engineer's GitHub username is ${this.github}`;
    };
    getRole() {
        return `The employee's role is ${this.role}`;
    };
};