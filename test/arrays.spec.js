// describe('create random values for variables', () => {

//     let fakeArray;
//     beforeEach(() => {
//         fakeArray = faker.datatype.array();
//     });
// });

describe('Find minimal elements of the array', () => {

    it('should be answer the number', () => {
        expect(getMinElement([1, 2, 3])).to.be.a('number');
    });

    it('should be minimal values from the array', () => {
        let min = Math.min(...[1, 2, 3]);
        expect(getMinElement([1, 2, 3])).to.be.equal(min);
    });
});

describe('Find maximal elements of the array', () => {

    it('should be the number', () => {
        expect(getMaxElement([1, 2, 3])).to.be.a('number');
    });

    it('should be the maximum values from the array', () => {
        let max = Math.max(...[1, 2, 3]);
        expect(getMaxElement([1, 2, 3])).to.be.equal(max);
    });
});

describe('find index of minimal values from array', () => {

    it('should be type answer the number', () => {
        expect(getIndexOfMinElement([2, 1, 0])).to.be.a('number');
    });
    it('should be index of min value from the array', () => {
        expect(getIndexOfMinElement([2, 1, 0])).to.be.equal(2);
    });
});

describe('Find index of max element from array', () => {
    it('should be type answer a number', () => {
        expect(getIndexOfMaxElement([1, 2, 3])).to.be.a('number');
    });
    it('should be max index from array', () => {
        expect(getIndexOfMaxElement([1, 2, 3])).to.be.equal(2);
    });
});

describe('Get sum of odd indexes from array', () => {
    it('should be type answer a number', () => {
        expect(getSumOfOddIndex([1, 2, 3, 4, 5, 4])).to.be.a('number');
    });
    it('should be sum of odd index', () => {
        expect(getSumOfOddIndex([1, 2, 3, 4, 5, 4])).to.be.equal(10);
    });
});

describe('Get reverse of the array', () => {
    it('should be type answer an array', () => {
        expect(getReverseArray([1, 2, 3])).to.be.an('array');
    });
    it('should be reverse array', () => {
        expect(getReverseArray([1, 2, 3])).to.eql([3, 2, 1]);
    });
});

describe('Get number of odd elements from the array', () => {
    it('should be type answer of a number', () => {
        expect(getNumberOfOddElemets([1, 2, 3, 4])).to.be.a('number');
    });
    it('should be number of the array odd elemets from index', () => {
        expect(getNumberOfOddElemets([1, 2, 3, 4])).to.be.equal(2);
    });
});

describe('Swap 2 parts of the array', () => {
    it('should be type array', () => {
        expect(changeArray([1, 2, 3, 4])).to.be.an('array');
    });
    it('should be swap 2 part of the array', () => {
        expect(changeArray([1, 2, 3, 4,])).to.be.eql([3, 4, 1, 2]);
    });
});

describe('Sort the array Bubbles method', () => {
    it('should be type array', () => {
        expect(sortArray([3, 2, 1, 4])).to.be.an('array');
    });
    it('should be sort the array bubbles method', () => {
        expect(sortArray([3, 2, 1, 4])).to.be.eql([1, 2, 3, 4]);
    });
});