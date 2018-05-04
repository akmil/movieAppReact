import sum from './sum';

describe('sum', () => {
    
    test('adds 1 + 2 to equal 3', () => {
        //Arrange;
        const a = 1;
        const b = 2;

        //Act
        const res = sum(a, b);

        //Assert
        expect(res).toBe(3);
    });
    
});
