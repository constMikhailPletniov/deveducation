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
        expect(getNumberFromString('')).to.be.equal(0);
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
    it('should be number after hundred and before nine hundred ninety nine', () => {
        expect(getNumberFromString('two hundred fifty eight')).to.be.equal(258);
        expect(getNumberFromString('seven hundred seventy seven')).to.be.equal(777);
    });

    describe('Enter a number from 1 to 1000000000000 and get string with name of number', () => {
        it('should be argument type a number', () => {
            expect(getNameOfNumberToTrillion('3')).to.be.equal(undefined);
        });
        it('should be  argument number more than zero', () => {
            expect(getNameOfNumberToTrillion(1)).to.be.equal('one');
        });
        it('should be number more or equal 1000000000 and number less than 1000000000000', () => {
            expect(getNameOfNumberToTrillion(1000000000)).to.be.equal('one billion(s) ');
            expect(getNameOfNumberToTrillion(777888999501)).to.be.equal('seven hundred seventy seven billion(s) eight hundred eighty eight million(s) nine hundred ninety nine thousand(s) five hundred one');
        });
        it('should be number more or equal 1000000 and number less than 1000000000', () => {
            expect(getNameOfNumberToTrillion(1987505)).to.be.equal('one million(s) nine hundred eighty seven thousand(s) five hundred five');
        });
        it('should be number more or equal 100 and number less than 1000', () => {
            expect(getNameOfNumberToTrillion(818)).to.be.equal('eight hundred eighteen');
        });
        it('should be number less than 10', () => {
            expect(getNameOfNumberToTrillion(4)).to.be.equal('four');
        });
        it('should be number less than 20 and more than 10', () => {
            expect(getNameOfNumberToTrillion(11)).to.be.equal('eleven');
        });
        it('should be number less than 100 more than 20', () => {
            expect(getNameOfNumberToTrillion(45)).to.be.equal('fourty five');
        });
    });
});