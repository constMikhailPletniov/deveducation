const client = require('../dataBases');
const { CustomError } = require('../../customError/customError');
const { STATUS_CODE } = require('../../configurations');

const getUserById = async (id) => {
    try {
        const result = await client.query(`SELECT * FROM users WHERE id = ${id}`);
        if (!result) {
            throw new CustomError('Not valid request to users dataBases', err);
        }
        return result;
    } catch (err) {
        console.error('getUserById repo: ', err);
        return new CustomError('Not valid request to users dataBases', err);
    }
};

module.exports = {
    getUserById
}