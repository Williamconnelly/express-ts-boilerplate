import { Response } from 'express';

enum RESPONSE_STATUS_CODES {
  Success = 200,
  Bad_Request = 400,
  No_Resource = 404,
  Internal_Server_Error = 500
}

enum RESPONSE_STATUS {
  Success = 'SUCCESS',
  Failure = 'FAILURE'
}

class ResponseObject<T> {

  public status: RESPONSE_STATUS;

  public message: string;

  public data?: T;

  constructor(status: RESPONSE_STATUS, message: string, data?: T) {
    this.status = status;
    this.message = message;
    if (data) {
      this.data = data;
    }
  }
}

export function successResponse<T>(res: Response, message: string, data?: T): void {
  res.status(RESPONSE_STATUS_CODES.Success).json(
    new ResponseObject<T>(RESPONSE_STATUS.Success, message, data)
  );
}

export function failureResponse<T>(res: Response, message: string, data?: T): void {
  res.status(RESPONSE_STATUS_CODES.Success).json(
    new ResponseObject<T>(RESPONSE_STATUS.Failure, message, data)
  );
}

export function insufficientParameters(res: Response): void {
  res.status(RESPONSE_STATUS_CODES.Bad_Request).json(
    new ResponseObject(RESPONSE_STATUS.Failure, 'Insufficient Parameters')
  );
}