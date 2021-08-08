import { Application, Request, Response } from 'express';
import { SampleController } from '../controllers/sample-controller';
import { failureResponse, successResponse } from './responses';

export class CommonRoutes {

  private _sampleController: SampleController = new SampleController();

  public route(app: Application) {

    // SAMPLE_ROUTE
    app.get('/sample', ((req: Request, res: Response) => {
      const _sampleData = {
        isSample: true,
        todo: 'Delete'
      };
      successResponse(res, 'Successful GET Request!', _sampleData);
    }));

    // SAMPLE_ROUTE
    app.post('/sample', ((req: Request, res: Response) => {
      successResponse(res, 'Successful POST Request!');
    }));

    // SAMPLE_ROUTE
    app.get('/test-controller', ((req: Request, res: Response) => {
      this._sampleController.sampleMethod(req, res);
    }));

    // CATCH_ALL
    app.all('*', ((req: Request, res: Response) => {
      failureResponse(res, 'Unavailable Route');
    }));
  }

}