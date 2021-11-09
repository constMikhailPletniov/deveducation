describe('Get summ of even numbers from 1 to 99', () => {
    it('should be sum of even numbers', () => {
        expect(getSumEvenAndOddNumbers()).to.be.eql({ evenCount: 2450, count: 49 });
    });
});

describe('Cheking the number, is it simple?', () => {
    it('should be argument are is simple number', () => {
        expect(checkIsSimpleNumber(11)).to.be.true;
    });
    it('should be argument arn t simple number', () => {
        expect(checkIsSimpleNumber(10)).to.be.false;
    });
    it('should beargument are type number', () => {
        expect(checkIsSimpleNumber('1')).to.be.equal(undefined);
    });
    it('should be argument more than zero', () => {
        expect(checkIsSimpleNumber(-10)).to.be.equal(undefined);
    });
});

describe('Find root of natural number accurate to the whole', () => {
    it('should be argument more than zero', () => {
        expect(getRootOfNativeNumber(-49)).to.be.equal(undefined);
    });
    it('should be argument type number', () => {
        expect(getRootOfNativeNumber('-49')).to.be.equal(undefined);
    });
    it('should be root of argument', () => {
        expect(getRootOfNativeNumber(49)).to.be.equal(7);
    });
});

describe('calculate factorial of argument', () => {
    it('should be argument type number', () => {
        expect(calcFactorial(null)).to.be.equal(undefined);
    });
    it('should be argument more than zero', () => {
        expect(calcFactorial(-1)).to.be.equal(undefined);
    });
    it('should be factorial of number', () => {
        expect(calcFactorial(5)).to.be.equal(120);
    });
});

describe('Calculate summ of numbers argument number', () => {
    it('should be argument type number', () => {
        expect(calcSumOfNumber(null)).to.be.equal(undefined);
    });
    it('should be argument more than zero', () => {
        expect(calcSumOfNumber(10)).to.be.equal(55);
    });
    it('should be argument less than zero', () => {
        expect(calcSumOfNumber(-10)).to.be.equal(-55);
    });
});

describe('show a number that is mirror post number', () => {
    it('should be argument type number', () => {
        expect(showMirrorNumbers('string')).to.be.equal(undefined);
    });
    it('should be positive argument', () => {
        expect(showMirrorNumbers(123)).to.be.equal(321);
    });
    it('should be negative argument', () => {
        expect(showMirrorNumbers(-123)).to.be.equal(-321);
    });
});