import {Component, View} from 'angular2/core';

import {Jobs} from 'collections/jobs';

import {JobsForm} from 'client/jobs-form/jobs-form';

import {RouterLink} from 'angular2/router';

import {AccountsUI} from 'meteor-accounts-ui';

import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'jobs-list'
})
@View({
    templateUrl: '/client/jobs-list/jobs-list.html',
    directives: [JobsForm, RouterLink, AccountsUI]
})
export class JobsList extends MeteorComponent {
    jobs: Mongo.Cursor<Job>;

    constructor() {
      super();
      this.subscribe('jobs', () => {
        this.jobs = Jobs.find();
      }, true);
    }

    removeJob(job) {
      Jobs.remove(job._id);
    }

    search(value: string) {
      if (value) {
          this.jobs = Jobs.find({ name: value });
      } else {
          this.jobs = Jobs.find();
      }
    }
}
