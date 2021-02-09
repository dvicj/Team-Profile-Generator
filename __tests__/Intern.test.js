const Employee = require('../lib/Employee');
jest.mock('../lib/Employee.js');

test('creates an intern object', () => {
    const employee = new Employee ('Devin, 4455,dldkldk,eepe,dvicj');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})