const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Does shuffle array receive an array', () => {
        let arr = [35, 40, 41, 42];
        expect(shuffleArray(arr)).toEqual(expect.arrayContaining(arr))
        //console.log(shuffleArray(arr));
    })

    test('Does shuffle array return an array', () => {
        let arr = [35, 40, 41, 42];
        expect(shuffleArray(arr)).toEqual(expect.arrayContaining([35, 40, 41, 42]))
    })

    // test('shuffle array has been called', () => {
        
        
    //     expect(shuffleArray).toHaveBeenCalled();
    // })
    
    // test('copies a new array', () => {
    //     let arr = [1, 2, 3]
    //     expect(shuffleArray(arr)).toBeTruthy
    // })  
        
 })
    
