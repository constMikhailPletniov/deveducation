const { CustomError } = require('../customError/customError');
const { factorialServices } = require('../services.js');

const getFactorialByType = ({ number, type }, start) => {
    try {
        if (type === 'recursion') {
            const result = factorialServices.getFactorialByRecursion({ number, start });
            if (!result) throw new CustomError('Error not valid type or namber');
            return { result: result };
        }
        if (type === 'cycle') {
            const result = factorialServices.getFactorialByCycle({ number, start });
            if (!result) throw new CustomError('Error not valid type or namber');
            return { result: result };
        }
        throw new CustomError('Some params are wrong');
    } catch (err) {
        return err;
    }
};

module.exports = {
    getFactorialByType
}