import {Component, View} from 'angular2/core';

import {RouteParams} from 'angular2/router';

import {Jobs} from 'collections/jobs';


@Component({
  selector: 'job-details'
})
@View({
  templateUrl: '/client/job-details/job-details.html'
})

export class JobDetails {
    job: Object;

    constructor(params: RouteParams) {
        var jobId = params.get('jobId');
        this.job = Jobs.findOne(jobId);
    }
}
