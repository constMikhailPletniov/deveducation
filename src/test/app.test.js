describe('Test function LinkedList', () => {
    before('initial constants link as new Linked_List', () => {
        const link = new LinkedList();
    });
    it('Should  get size link', () => {
        expect(link.length()).to.be.equal(0)
    });
    it('Should  get size link', () => {
        expect(link.length()).not.to.equal(undefined)
    });
    it('Should  get Head link method', () => {
        expect(link.Head()).to.be.equal(null)
    });
    it('Should  get Head link method', () => {
        expect(link.Head()).not.to.equal(undefined)
    });

    it('Should  get head {value: 1, next: null} when call first time method add with argument 1', () => {
        link.add(1);
        expect(link.Head()).to.be.eql({ value: 1, next: null })
    });
    it('Should  get head {value: 2, next: {value: 1, next: null}} when call first time method add with argument 1', () => {
        link.add(2);
        expect(link.Head()).to.be.eql({ value: 2, next: { value: 1, next: null } })
    });
    it('Should remove head from linked list', () => {
        link.remove();
        expect(link.Head()).to.be.eql({ value: 1, next: null });
    });
    it('get values from Node function when put 1 argument', () => {
        const arg = new Node(1);
        expect(arg).to.be.eql({ value: 1, next: null });
    });
    it('get values from Node function when put 2 argument', () => {
        const arg2 = new Node(1, 2);
        expect(arg2).to.be.eql({ value: 1, next: 2 });
    });
    it('get values from Node function when put 2 argument, second argument is object', () => {
        const argObj = new Node(1, { value: 2, next: null });
        expect(argObj).to.be.eql({ value: 1, next: { value: 2, next: null } });
    });
    it('function removePrintList', () => {
        expect(removePrintList()).to.be.eql(undefined);
    });
});