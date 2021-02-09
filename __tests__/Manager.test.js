const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee');

// test('creates a manager object', () => {
//     const employee = new Employee ('Devin, 4455,dldkldk,eepe,5466');

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));
//     expect(employee.role).toEqual(expect.any(String));
//     expect(employee.number).toEqual(expect.any(Number));
// })

test("getRole()", () => {
    const role = "Manager"; 
    const x = new Manager("Devin", 56, "email@gmail.com", 487);
    expect(x.getRole()).toBe(role);
}); 

test("getOfficeNumber()", () => {
    const number = 567; 
    const x = new Manager("Devin", 56, "email@gmail.com", number);
    expect(x.getOfficeNumber()).toBe(number);
});