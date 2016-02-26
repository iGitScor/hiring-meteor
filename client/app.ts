import {Component, View, NgZone} from 'angular2/core';

import {bootstrap} from 'angular2-meteor';

import {Jobs} from 'collections/jobs';

import {JobsForm} from 'client/jobs-form/jobs-form';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [JobsForm]
})
class Hiring {
  jobs: Mongo.Cursor<Object>;

  constructor () {
      this.jobs = Jobs.find();
  }

  removeJob(job) {
    Jobs.remove(job._id);
  }
}

bootstrap(Hiring);
