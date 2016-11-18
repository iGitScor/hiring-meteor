import { Injectable } from 'angular2/core';

@Injectable()
export class AppService {
  getConfiguration(): any {
    return {
      contact: 'service-rh@company.com',
      company: 'Company name'
    };
  }
}
