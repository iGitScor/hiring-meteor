import { MeteorComponent } from 'angular2-meteor';

import { Component, View } from 'angular2/core';

import { RouterLink } from 'angular2/router';

import { Jobs } from 'collections/jobs';

import { JobsForm } from 'client/jobs-form/jobs-form';

import { InjectUser } from 'meteor-accounts';

@Component({
  selector: 'jobs-list'
})
@View({
  templateUrl: '/client/jobs-list/jobs-list.html',
  directives: [JobsForm, RouterLink]
})
@InjectUser('currentUser')

export class JobsList extends MeteorComponent {
  jobs: Mongo.Cursor<Job>;
  description: String = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Etiam imperdiet ex ut quam vestibulum malesuada.',
    'Nam a maximus ipsum. Vivamus lobortis porttitor libero, sed sagittis orci varius vitae.',
    'Donec dictum turpis vel purus bibendum tristique.',
    'Nullam tellus libero, condimentum a ornare ac, varius nec urna.',
    'Donec tincidunt dignissim mi ac pellentesque.',
    'Aliquam nec turpis vehicula, imperdiet purus sagittis, sagittis erat.',
  ].join();

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

  search(value?: string) {
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
