
describe('Create algorytm ', () => {
    it('should be number of piece', () => {
        expect(getCookingTime(5)).to.be.equal(1);
    });
    it('should be type of number', () => {
        expect(getCookingTime('5')).to.be.equal(1);
    });
    it('should be eggAmount more than zero', () => {
        expect(getCookingTime(0)).to.be.equal(undefined);
    })
});

describe('Get even or odd numbers from arrays all exept one find this number', () => {
    it('should be array as argument', () => {
        expect(getNumber(1, 2, 3)).to.be.equal(undefined);
    });
    it('should be even', () => {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.be.equal(4);
    });
    it('should be odd', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.be.equal(13);
    });
});

describe('Filter arrays as first parameter, second parameter get string? and search the word in title and return', () => {

    it('should be second arguments type of string', () => {
        expect(findTitle([{
            title: 'Some title1'
        },
        { title: 'I like JS' },
        { user: 'This obj doesn\'t have key tittle js' },
        { title: 'Js - is the best!' }], 1)).to.eql([]);
    });
    it('should be hasOwnProperty title', () => {
        expect(findTitle([{
            title: 'Some title1'
        },
        { title: 'I like JS' },
        { user: 'This obj doesn\'t have key tittle js' },
        { title: 'Js - is the best!' }], 'js')).to.be.eql([{ title: 'I like JS' },
        { title: 'Js - is the best!' }]);
    });
});

describe('Get string your function must return object where keys - symbols of string, values mount of keys', () => {
    it('should be argument string', () => {
        expect(countCharacters(0)).to.be.equal(undefined);
    });
    it('should be answer object', () => {

        expect(countCharacters('aabcddeffge')).to.be.eql({ a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1 });
    });
});

describe('Get a number and find closer number pallindrome', () => {
    it('should be type number', () => {
        expect(getNextPalindrome('3')).to.be.equal(undefined);
    });
    it('should be not ture IsNaN', () => {
        expect(getNextPalindrome(NaN)).to.be.false;
    });
    it('should be next pallindrome', () => {
        expect(getNextPalindrome(111)).to.be.equal(121);
    });
});