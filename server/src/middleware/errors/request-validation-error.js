const { validationResult } = require('express-validator');

export class RequestValidationError {
  statusCode = 500;
  constructor(errors) {
    //Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}
