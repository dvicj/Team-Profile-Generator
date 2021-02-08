jest.mock('../lib/Employee.js');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee ('Devin Jones', 6575, 'skjskj', 'skjs');

    expect(employee.name).toBe('Devin Jones');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
})