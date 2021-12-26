
const getFactorialByRecursion = ({ number, start }) => {
    try {
        function getFactorial(number) {
            if (number === 0) return;
            if (number === 1) return 1;
            return number * getFactorial(number - 1);
        }
        let count = getFactorial(number);
        const end = new Date();
        const time = end - start;
        return { count, time };
    } catch (err) {
        return err;
    }
};

const getFactorialByCycle = ({ number, start }) => {
    try {

        let count = number;

        while (number !== 1) {
            count *= (number - 1);
            number--;
        }
        const end = new Date();
        const time = end - start;
        return { count, time };
    } catch (err) {
        return err;
    }
};
module.exports = {
    getFactorialByRecursion,
    getFactorialByCycle
}