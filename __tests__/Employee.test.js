test('creates an employee object', () => {
    const employee = new Employee ('manager', 'Devin Jones');

    expect(employee.name).toBe('Devin Jones');
    expect(employee.title).toBe('manager');
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.number).toEqual(expect.any(Number));

})