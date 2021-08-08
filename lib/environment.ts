export enum Environments {
  local_environment = 'local',
  dev_environment = 'dev',
  prod_environment = 'prod',
  qa_environment = 'qa'
}

export class Environment {
  private _environment: string;

  constructor(environment: string) {
    this._environment = environment;
  }

  public getPort(): Number {
    switch (this._environment) {
      case (Environments.prod_environment): return 8081;
      case (Environments.dev_environment): return 8082;
      case (Environments.qa_environment): return 8083;
      case (Environments.local_environment): default: return 3000;
    }
  }

}

export default new Environment(Environments.local_environment);