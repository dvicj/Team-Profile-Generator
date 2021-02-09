const Intern = require('../lib/Intern');

// test('creates an intern object', () => {
//     const employee = new Employee ('Devin, 4455,dldkldk,eepe,dvicj');

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));
//     expect(employee.role).toEqual(expect.any(String));
//     expect(employee.school).toEqual(expect.any(String));
// })

test("getRole() = Intern", () => {
    const role = "Intern";
    const x = new Intern("Devin", 56, "email@email.com", "Western");
    expect(x.getRole()).toBe(role);
});

test("getSchool()", () => {
    const school = "MLU";
    const x = new Intern("Dave", 56, "email@email.com", school);
    expect(x.getSchool()).toBe(school);
});