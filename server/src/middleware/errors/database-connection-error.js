export class DatabaseConnectionError {
  statusCode = 500;
  reason = 'Error connecting to Database';
  constructor() {
    //Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
