
class CustomError {
    constructor(message, status) {
        this.message = message;
        this.name = "CustomError";
        this.status = status;
    }
    stack = () => {
        this.constructor;
    };
}

module.exports = {
    CustomError
}

