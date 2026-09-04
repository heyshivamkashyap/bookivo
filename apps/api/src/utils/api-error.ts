export class ApiError<T = unknown> extends Error {
  statusCode: number;
  data: T;

  constructor(statusCode: number, message: string, data: T) {
    super(message);

    this.statusCode = statusCode;
    this.data = data;

    Error.captureStackTrace(this, this.constructor);
  }
}
