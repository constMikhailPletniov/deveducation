
describe('get answer from values a and b', () => {
    it('should be answer type number', () => {
        expect(getMultyOrSum(2, 3)).to.be.a('number');
    });
    it('should be Multy', () => {
        expect(getMultyOrSum(2, 3)).to.be.equal(6);
    });
    it('should be Sum', () => {
        expect(getMultyOrSum(3, 1)).to.be.equal(4);
    })
});

describe('Define Quarter', () => {
    it('should be answer type string', () => {
        expect(defineAQuarter(-10, 20)).to.be.a('string');
    });
    it('should be first quarter', () => {
        expect(defineAQuarter(10, 20)).to.be.equal('first quarter');
    });
    it('should be second quarter', () => {
        expect(defineAQuarter(-10, 20)).to.be.equal('second quarter');
    });
    it('should be thrird quarter', () => {
        expect(defineAQuarter(-10, -20)).to.be.equal('thrird quarter');
    });
    it('should be fourth quarter', () => {
        expect(defineAQuarter(10, -20)).to.be.equal('fourth quarter');
    });
});

describe('Find sum only positive values', () => {
    it('should be answer type number', () => {
        expect(getSumPositiv(10, 20, 10)).to.be.a('number');
    });
    it('should be number One negative', () => {
        expect(getSumPositiv(-10, 20, 5)).to.be.equal(25);
    });
    it('should be number two negative', () => {
        expect(getSumPositiv(10, -20, 10)).to.be.equal(20);
    });
    it('should be number three negative', () => {
        expect(getSumPositiv(4, 20, -10)).to.be.equal(24);
    });
    it('default all positive', () => {
        expect(getSumPositiv(2, 7, 1)).to.be.equal(10);
    });
});

describe('Count maximum expresion (max(а*b*с, а+b+с))+3', () => {
    it('should be answer type number', () => {
        expect(CountMaxExpression(2, 3, 4)).to.be.a('number');
    });
    it('should be multy as max', () => {
        expect(CountMaxExpression(2, 3, 4)).to.be.equal(27);
    });
    it('should be sum as max', () => {
        expect(CountMaxExpression(1, 1, 1)).to.be.equal(6);
    });
});

describe('get student mark from rating', () => {
    it('should be answer string', () => {
        expect(getMarkOfStudentsRating(100)).to.be.a('string');
    });
    it('should be rating from 0 to 19 mark F', () => {
        expect(getMarkOfStudentsRating(0)).to.be.equal('F');
    });
    it('should be rating from 20 to 39 mark E', () => {
        expect(getMarkOfStudentsRating(39)).to.be.equal('E');
    });
    it('should be rating from 40 to 59 mark D', () => {
        expect(getMarkOfStudentsRating(40)).to.be.equal('D');
    });
    it('should be rating from 60 to 74 mark C', () => {
        expect(getMarkOfStudentsRating(74)).to.be.equal('C');
    });
    it('should be rating from 75 to 89 mark B', () => {
        expect(getMarkOfStudentsRating(75)).to.be.equal('B');
    });
    it('should be rating from 90 to 100 mark A', () => {
        expect(getMarkOfStudentsRating(100)).to.be.equal('A');
    });
    it('should be rating positive numbers start from 0 to 100', () => {
        expect(getMarkOfStudentsRating(-1)).to.be.equal(undefined);
        expect(getMarkOfStudentsRating(101)).to.be.equal(undefined);
    });
});