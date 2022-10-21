const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Does shuffle array receive an array', () => {
        let arr = [35, 40, 41, 42];
        expect(shuffleArray(arr)).toContain([35, 40, 41,42])
    })
    // test('Does shuffle array return an array', () => {
    //    expect(shuffleArray([35, 40, 41, 42]).toContain([35, 40, 41, 42])
    // })
    
})