import {Component, View} from 'angular2/core';

import {RouteParams} from 'angular2/router';

import {Jobs} from 'collections/jobs';

import {RouterLink} from 'angular2/router';

import {RequireUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

@Component({
  selector: 'job-details'
})
@View({
  templateUrl: '/client/job-details/job-details.html',
  directives: [RouterLink]
})
@RequireUser()
export class JobDetails extends MeteorComponent {
    job: Job;

    constructor(params: RouteParams) {
      super();
      var jobId = params.get('jobId');
      this.subscribe('job', jobId, () => {
          this.job = Jobs.findOne(jobId);
      }, true);
    }

     saveJob(job) {
      if (Meteor.userId()) {
        Jobs.update(job._id, {
          $set: {
            name: job.name,
            description: job.description,
            location: job.location
          }
        });
      } else {
        alert('error');
      }
    }
}
