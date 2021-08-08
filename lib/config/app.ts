import express, { Express } from 'express';
import helmet from 'helmet';
import { CommonRoutes } from '../routes/common-routes';

export class App {

  public app: Express;

  private _commonRoutes: CommonRoutes = new CommonRoutes();

  constructor() {
    this.app = express();
    this.configureApp();
    this.configureRoutes();
  }

  private configureApp(): void {
    this.app.use(helmet());
  }

  private configureRoutes(): void {
    // CommonRoutes includes catch-all(*). Always route last in sequence.
    this._commonRoutes.route(this.app);
  }

}

export default new App().app;