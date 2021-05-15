export class NotFoundError {
  statusCode = 404;

  constructor() {
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not Found' }];
  }
}
