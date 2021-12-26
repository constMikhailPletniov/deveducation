const http = require('http');

const { CONFIG, STATUS_CODE } = require('./configurations');
const { USERS_ROUTERS } = require('./routers');

require('./dataBases/dataBases');

http.createServer(async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Content-Type', 'application/json, text/plain; charset=utf-8;');
    res.setHeader('Access-Control-Max-Age', '-1');

    req.on('error', (err) => {
        console.error('Server error: ', err);
        res.statusCode = STATUS_CODE.INTERNAL_ERROR;
        res.end(JSON.stringify({ message: error }));
    });

    const buffer = [];

    req.on('data', chunk => {
        buffer.push(chunk);
    });

    req.on('end', async () => {
        const body = buffer.length ?
            JSON.parse(buffer) : JSON.stringify({ message: "body empty" });
        await USERS_ROUTERS.router({ req, res });
    });

})
    .listen(CONFIG.PORT, () => {
        console.log(`App Work on ${CONFIG.PORT}`);
    });