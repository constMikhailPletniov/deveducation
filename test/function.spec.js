describe('Get string name day of week', () => {
    it('should be argument type number', () => {
        expect(getNameOfDayOfWeek('2')).to.be.equal(undefined);
    });
    it('should be argument more than 1', () => {
        expect(getNameOfDayOfWeek(0)).to.be.equal(undefined);
    });
    it('should be argument less than 7', () => {
        expect(getNameOfDayOfWeek(8)).to.be.equal(undefined);
    });
    it('should be answer Monday', () => {
        expect(getNameOfDayOfWeek(1)).to.be.equal('Monday');
    });
    it('should be answer Tuesday', () => {
        expect(getNameOfDayOfWeek(2)).to.be.equal('Tuesday');
    });
    it('should be answer Wednesday', () => {
        expect(getNameOfDayOfWeek(3)).to.be.equal('Wednesday');
    });
    it('should be answer Thursday', () => {
        expect(getNameOfDayOfWeek(4)).to.be.equal('Thursday');
    });
    it('should be answer Friday', () => {
        expect(getNameOfDayOfWeek(5)).to.be.equal('Friday');
    });
    it('should be answer Saturday', () => {
        expect(getNameOfDayOfWeek(6)).to.be.equal('Saturday');
    });
    it('should be answer Sunday', () => {
        expect(getNameOfDayOfWeek(7)).to.be.equal('Sunday');
    });
});

describe('Find distance between two points in cartesian space', () => {
    it('should be arguments are type number [first arg]', () => {
        expect(getDistance('3', 4, 5, 6)).to.be.equal(undefined);
    });
    it('should be arguments are type number [second arg]', () => {
        expect(getDistance(3, '4', 5, 6)).to.be.equal(undefined);
    });
    it('should be arguments are type number [third arg]', () => {
        expect(getDistance(3, 4, '5', 6)).to.be.equal(undefined);
    });
    it('should be arguments are type number [fourty arg]', () => {
        expect(getDistance(3, 4, 5, '6')).to.be.equal(undefined);
    });
    it('should be answer cartesian space fixed to 2 after point', () => {
        expect(getDistance(3, 4, 5, 6)).to.be.equal(2.83);
    });
});

describe('Enter a number from 1 to 999 and get string with name of number', () => {
    it('should be argument type a number', () => {
        expect(getNameOfNumber('2')).to.be.equal(undefined);
    });
    it('should be argument more than zero', () => {
        expect(getNameOfNumber(-1)).to.be.equal(undefined);
    });
    it('should be argument from number to uppercase string before ten', () => {
        expect(getNameOfNumber(1)).to.be.equal('one');
    });
    it('should be argument from number to uppercase string before twenty', () => {
        expect(getNameOfNumber(19)).to.be.equal('nineteen');
    });
    it('should be argument from number to uppercase string before hundred', () => {
        expect(getNameOfNumber(21)).to.be.equal('twenty one');
    });
    it('should be argument from number to uppercase string more than hundred', () => {
        expect(getNameOfNumber(101)).to.be.equal('one hundred one');
    });
});

describe('Enter the uppercase and get a number', () => {
    it('should be argument type a string', () => {
        expect(getNumberFromString(100)).to.be.equal(undefined);
    });
    it('should be argument type a string and  emplty', () => {
        expect(getNumberFromString('')).to.be.equal(undefined);
    });
    it('should be number before ten', () => {
        expect(getNumberFromString('four')).to.be.equal(4);
    });
    it('should be number before tvelwe', () => {
        expect(getNumberFromString('eleven')).to.be.equal(11);
    });
    it('should be number before hundred', () => {
        expect(getNumberFromString('fifty nine')).to.be.equal(59);
    });
});