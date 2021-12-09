const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5334,
    user: 'postgres',
    password: process.env.PG_PASSWORD,
});

client.connect(err => {
    if (err) {
        console.error('connect failed', err.stack);
    }
    console.log('connected');
});

const res = client.query();


module.exports = res;