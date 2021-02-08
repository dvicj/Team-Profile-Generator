//parent class

//methods: name, id, email, getName(), getId(), getEmail(), getRole() - returns Employee

function Employee (name, id, email, role) {
    this.name = name; 
    this.id = id; 
    this.email = email; 
    this.role = role; 

    Employee.prototype.getName = function() {
        return `The employee's name is ${this.name}!`;
    };

    Employee.prototype.getId = function() {
        return `The employee's ID is ${this.id}!`;
    };

    Employee.prototype.getEmail = function() {
        return `The employee email is ${this.email}!`;
    };

    Employee.prototype.getRole = function() {
        return `The employee's role is ${this.role}!`;
    };
};