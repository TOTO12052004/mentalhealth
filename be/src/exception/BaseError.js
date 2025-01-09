class BaseError extends Error {
    constructor(params) {
        super(params.message);
        this.status = params.status;
        this.message = params.message;
    }
}

module.exports = BaseError;