const Employee = require('../lib/Employee');
jest.mock('../lib/Employee.js');

test('creates a manager object', () => {
    const employee = new Employee ('Devin, 4455,dldkldk,eepe,5466');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    expect(employee.number).toEqual(expect.any(Number));
})