import {Component, View, NgZone, provide} from 'angular2/core';

import {bootstrap} from 'angular2-meteor';

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

import {JobsList} from 'client/jobs-list/jobs-list';

import {JobDetails} from 'client/job-details/job-details';

@Component({
    selector: 'app'
})
@View({
    template: '<router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'JobsList', component: JobsList },
    { path: '/job/:jobId', as: 'JobDetails', component: JobDetails }
])
class Hiring {}

bootstrap(Hiring, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
