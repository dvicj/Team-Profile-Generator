jest.mock('../lib/Employee.js');
const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee ('Devin Jones', 6575, 'skjskj', 'skjs');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('getName()', () => {
    const name = "Devin";
    const x = new Employee(name);
    expect(x.getName().toBe(name));
});

test('getId()', () => {
    const id = 24; 
    const x = new Employee("Devin", id);
    expect(x.getId().toBe(id));
});

test('getEmail()', () => {
    const email = "email@gmail.com";
    const x = new Employee("Devin", 24, email);
    expect(x.getEmail().toBe(email)); 
});

test("getRole() = Employee", () => {
    const role = "Employee";
    const x = new Employee("Devin", 24, "email@gmail.com");
    expect(x.getRole()).toBe(role);
});