import { Request, Response } from 'express';
import { successResponse } from '../routes/responses';

// SAMPLE_CONTROLLER_CLASS
export class SampleController {

  public sampleMethod(req: Request, res: Response): void {
    successResponse(res, 'Successful Req!');
  }

}