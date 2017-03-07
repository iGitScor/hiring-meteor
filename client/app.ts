import { bootstrap } from 'angular2-meteor';

import { Component, View, NgZone, provide } from 'angular2/core';

import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Router, APP_BASE_HREF } from 'angular2/router';

import { Title } from 'angular2/platform/browser';

import { JobsList } from 'client/jobs-list/jobs-list';

import { JobDetails } from 'client/job-details/job-details';

import { JobsForm } from 'client/jobs-form/jobs-form';

import { AppService } from 'client/services/app.service';

import { AccountsUI } from 'meteor-accounts-ui';

@Component({
  selector: 'app',
  providers: [AppService]
})
@View({
  templateUrl: '/client/layout/layout.html',
  directives: [ROUTER_DIRECTIVES, AccountsUI]
})
@RouteConfig([
  { path: '/', as: 'JobsList', component: JobsList },
  { path: '/job/add', as: 'JobForm', component: JobsForm },
  { path: '/job/:jobId', as: 'JobDetails', component: JobDetails }
])

class Hiring {

  configuration: any;

  constructor(router: Router, title: Title, private appService: AppService) {
    router.subscribe((url) => {
      title.setTitle(router._currentInstruction.component.componentType.name);
    });

    this.loadConfiguration();
  }

  loadConfiguration():void {
    this.configuration = this.appService.getConfiguration();
  }

}

bootstrap(Hiring, [ROUTER_PROVIDERS, Title, provide(APP_BASE_HREF, { useValue: '/' })]);
