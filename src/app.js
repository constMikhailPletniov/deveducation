const http = require('http');
const url = require('url');
const router = require('node-router');
require('dotenv').config();
const db = require('./dataBases');

const { PORT, GET, POST, PUT, DELETE } = require('./config/connstants');

http.createServer((req, res) => {

    const urlReq = url.parse(req.url, true);

    if (urlReq.method === GET) {
        switch (true) {
            case (urlReq === '/'):
            default:
                res.statusCode = 404;
                res.end('Error');
        }
    }

    if (urlReq.method === POST) {
        switch (true) {
            case (urlReq === '/'):
            default:
                res.statusCode = 404;
                res.end('Error');
        }
    }

    if (urlReq.method === PUT) {
        switch (true) {
            case (urlReq === '/'):
            default:
                res.statusCode = 404;
                res.end('Error');
        }
    }

    if (urlReq.method === DELETE) {
        switch (true) {
            case (urlReq === '/'):
            default:
                res.statusCode = 404;
                res.end('Error');
        }
    }

}).listen(PORT, () => {
    console.log(`App Work on ${PORT}`);
});