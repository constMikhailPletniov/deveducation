const { userRepositories } = require('../dataBases/repositories');
const { CustomError } = require('../customError/customError');


const getUserById = async (id) => {
    try {
        const { error, data } = await userRepositories.getUserById(id);
        if (error) {
            throw new CustomError('Cannot get data from database');
        }
        return { data: data };
    } catch (err) {
        console.error('getUserById cont: ', err.error);
        return err;
    }
};

module.exports = {
    getUserById
}