import {Component, View} from 'angular2/core';

import {Jobs} from 'collections/jobs';

import {JobsForm} from 'client/jobs-form/jobs-form';

import {RouterLink} from 'angular2/router';

import {AccountsUI} from 'meteor-accounts-ui';

import {InjectUser} from 'meteor-accounts';

import {MeteorComponent} from 'angular2-meteor';

@Component({
  selector: 'jobs-list'
})
@View({
  templateUrl: '/client/jobs-list/jobs-list.html',
  directives: [JobsForm, RouterLink, AccountsUI]
})
@InjectUser('currentUser')

export class JobsList extends MeteorComponent {
  jobs: Mongo.Cursor<Job>;

  constructor() {
    super();
    this.subscribe('jobs', () => {
      this.jobs = Jobs.find();
    }, true);
  }

  /**
   * Check if there is a job to handle empty state
   * @returns       true if there is at least one job matching the search
   */
  hasAtLeastOneJob():boolean {
    if (this.jobs) {
      return this.jobs.count() >= 1;
    } else {
      // If jobs are not loaded from MongoDB yet
      return false;
    }
  }

  removeJob(job) {
    Jobs.remove(job._id);
  }

  search(value: string) {
    if (value) {
      var searchRegex = new RegExp(
        value.toLowerCase(),
        'i'
      );
      this.jobs = Jobs.find({ name: searchRegex });
    } else {
      this.jobs = Jobs.find();
    }
  }

  submitHandler(event, search: string) {
    // Enter key press event
    if (event.keyCode === 13) {
      this.search(search);
    }
  }
}
