const Engineer = require('../lib/Engineer')
// test('creates an engineer object', () => {
//     const employee = new Employee ('Devin, 4455,dldkldk,eepe,dvicj');

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));
//     expect(employee.role).toEqual(expect.any(String));
//     expect(employee.github).toEqual(expect.any(String));
// })

test('getRole() = Engineer', () => {
    const role = "Engineer";
    const x = new Engineer("Devin", 45, "email@github.com", "dvicj");
    expect(x.getRole()).toBe(role);
}); 

test('getGitHub()', () => {
    const github = "dvicj";
    const x = new Engineer("Devin", 65, "gmail@gmail.com", github); 
    expect(x.getGitHub()).toBe(github);

});