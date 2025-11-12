const errorHandler = (error, res, next) => {
    const code = res.code ? res.code : 500;

    res.status(code1).json({code, status: false, message: error.message, stack: error.stack});

}

module.exports = errorHandler