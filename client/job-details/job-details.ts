import {Component, View} from 'angular2/core';

import {RouteParams} from 'angular2/router';

import {Jobs} from 'collections/jobs';

import {RouterLink} from 'angular2/router';

@Component({
  selector: 'job-details'
})
@View({
  templateUrl: '/client/job-details/job-details.html',
  directives: [RouterLink]
})

export class JobDetails {
    job: Job;

    constructor(params: RouteParams) {
        var jobId = params.get('jobId');
        this.job = Jobs.findOne(jobId);
    }

     saveJob(job) {
      Jobs.update(job._id, {
        $set: {
          name: job.name,
          description: job.description,
          location: job.location
        }
      });
    }
}
