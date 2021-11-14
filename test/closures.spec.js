describe('Get answer, can Vasil give all tiket for visitors', () => {
    it('should be array argument', () => {
        expect(buyTickets(1, 2, 3)).to.be.eql(undefined);
    });
    it('should be out less than zero', () => {
        expect(buyTickets([25, 50, 100])).to.be.eql('NO');

    });
    it('should be wallet[0] === undefined', () => {
        expect(buyTickets([50, 25, 100])).to.be.eql('NO');
    });
    it('should be out more than zero', () => {
        expect(buyTickets([25, 25, 50])).to.be.eql('YES');
    });
    it('should be out more than zero, but arguments have number in string type answer YES', () => {
        expect(buyTickets(['25', '25', '50', '100'])).to.be.eql('YES');
    });
    it('should be out more than zero, but arguments have number type string answer NO', () => {
        expect(buyTickets(['25', '50', '100'])).to.be.eql('NO');
    });
});

describe('Get Sum of overwhelming numbers without direct additions and BigInt', () => {
    it('should be number 1 and number 2 type of string', () => {
        expect(getSum(123, 123)).to.be.equal(undefined);
        expect(getSum(null, undefined)).to.be.equal(undefined);
    });
    it('should be answer 447', () => {
        expect(getSum('123', '324')).to.be.equal('447');
    });
    it('should be answer 34444444...44444', () => {
        expect(getSum('111111111111111111111111111111111111111111111111111111111111111', '233333333333333333333333333333333333333333333333333333333333333')).to.be.equal('344444444444444444444444444444444444444444444444444444444444444');
    });
});

describe('Get amount of posts and commets from the author', () => {
    it('should be first arguments is not an array', () => {
        expect(getSumAuthorAndPosts('', 'Rimus')).to.be.equal(undefined);
        expect(getSumAuthorAndPosts(11, 'Rimus')).to.be.equal(undefined);
    });
    it('should be object', () => {
        expect(getSumAuthorAndPosts([{
            id: 1,
            post: 'some post1',
            title: 'title',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                }
            ]
        }], 'Rimus')).to.be.eql({ post: 0, comment: 1 })
    });
});

describe('Create cache function. The function have been get values from function? if values are in cahe yet, return cache', () => {
    it('should be array when you post values', () => {
        expect(cachedFunc(concatFunc('foo', 'bar'))).to.be.eql(['foobar']);
    });
    it('should be array when values in cacheFunction is', () => {
        expect(cachedFunc(concatFunc('foo', 'bar'))).to.be.eql(['foobar']);
    });
});