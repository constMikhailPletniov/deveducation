const Url = require('url');
require('../dataBases/dataBases');
const { usersControllers, factorialControllers } = require('../controllers');

const { METHODS, ENDPOINTS, STATUS_CODE } = require('../configurations');

const router = async ({ req, res }) => {
    try {
        const { pathname, query } = Url.parse(req.url, true);

        switch (true) {
            case (req.method === METHODS.GET && pathname === ENDPOINTS.USERS):
                ({ err, data } = await usersControllers.getUserById(query.id));
                res.statusCode = STATUS_CODE.OK;
                return res.end(JSON.stringify({ message: data }));
            case (req.method === METHODS.GET && pathname === ENDPOINTS.FACTORIAL):
                const start = new Date();
                ({ err, result: result } = factorialControllers.getFactorialByType(query, start));
                res.statusCode = STATUS_CODE.OK;
                return res.end(JSON.stringify({ message: result }));
        }
        if (error) {
            res.statusCode = STATUS_CODE.NOT_FOUND;
            return res.end(JSON.stringify({ message: error.message }));
        }
    } catch (err) {
        console.error('routers: ', err);
    }
};

module.exports = { router };