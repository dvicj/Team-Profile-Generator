//parent class

//methods: name, id, email, getName(), getId(), getEmail(), getRole() - returns Employee

class Employee {
    constructor(name='') {
    this.name = name; 
    this.id = id; 
    this.email = email; 
    this.role = role; 
}

getName() {
    return `The employee's name is ${this.name}!`;
};

getId() {
    return `The employee's ID is ${this.id}!`;
};

getEmail() {
    return `The employee email is ${this.email}!`;
};

getRole() {
    return `The employee's role is ${this.role}!`;
};
};

module.exports = Player; 
