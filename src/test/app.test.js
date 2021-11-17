describe('Function addElements to linked list', () => {
    it('should be function Node elem number', () => {
        expect(Node(1)).to.be.equal(undefined);
    });
    it('should be function Node elem string', () => {
        expect(Node('f')).to.be.equal(undefined);
    });
    it('should be function Node elem null', () => {
        expect(Node(null)).to.be.equal(undefined);
    });
    it('should be function Node elem undefined', () => {
        expect(Node(undefined)).to.be.equal(undefined);
    });
});

describe('Function Linked List', () => {
    const link = new LinkedList;

    it('should be get return of function LinkedList', () => {
        expect(LinkedList(undefined)).to.be.equal(undefined);
    });
    it('should be size 0', () => {
        expect(link.size()).to.be.equal(0);
    });
    it('should be add method of function add string value, the first value', () => {
        expect(link.add('first value')).to.be.eql({ element: 'first value', next: null });
    });
    it('should be add method of function add number value, the second value', () => {
        expect(link.add(2)).to.be.eql({ element: 'first value', next: { element: 2, next: null } });
    });
    it('should be remove method first value', () => {
        expect(link.remove(2)).to.be.eql({ element: 'first value', next: null });
    });
});