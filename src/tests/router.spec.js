const { router } = require('../routers');
const Url = require('url');


test('test router', () => {
    beforeEach(() => {
        const req = {
            url: '/universities'
        }
        const { pathname, query } = Url.parse(req.url, true);
    });
    expect(router({ req, res, body }).not.toBeNull());
    expect(createUniversity({ req, res, body })).not.toBeUndefined();
});