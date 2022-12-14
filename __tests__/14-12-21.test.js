const {updateRemoteStudents} = require('../14-12-21.js')



describe('updateRemoteStudents', () => {
   
      
    test('Returns the original array ob ojects if there are no location keys missing', () => {
      //Arrange
      const  input = [{ name: 'Hypatia', age: 31, location: 'leeds' },
      { name: 'Tao', age: 47, location: 'manchester' }]

      const output = [{ name: 'Hypatia', age: 31, location: 'leeds' },
      { name: 'Tao', age: 47, location: 'manchester' }]
      //Act
      //Assert;
      expect(updateRemoteStudents(input)).toEqual(output);
  
    });
  
      test('Returns a new array with a location property added where missing', () => {
         //Arrange
         const  input = [
              { name: 'Hypatia', age: 31, location: 'leeds' },
              { name: 'Ramanujan', age: 22 },
              { name: 'Tao', age: 47, location: 'manchester' }
            ]
   
         const output = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote'  },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]
 
         //Act
         //Assert;
          expect(updateRemoteStudents(input)).toEqual(output);
  
  });
  test.only('Has no effect on the original array passed in as an arguement', () => {
    //Arrange
    const  input = [
         { name: 'Hypatia', age: 31, location: 'leeds' },
         { name: 'Ramanujan', age: 22 },
         { name: 'Tao', age: 47, location: 'manchester' }
       ]
   
    const copy = [input[0],input[1],input[2]]
    //Act
    updateRemoteStudents(input)

    //Assert;
     expect(input).toEqual(copy);


  
  });
});
 