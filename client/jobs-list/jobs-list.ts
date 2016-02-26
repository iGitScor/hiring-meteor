import {Component, View} from 'angular2/core';

import {Jobs} from 'collections/jobs';

import {JobsForm} from 'client/jobs-form/jobs-form';

import {RouterLink} from 'angular2/router';

@Component({
    selector: 'jobs-list'
})
@View({
    templateUrl: '/client/jobs-list/jobs-list.html',
    directives: [JobsForm, RouterLink]
})
export class JobsList {
    jobs: Mongo.Cursor<Object>;

    constructor() {
        this.jobs = Jobs.find();
    }

    removeJob(job) {
        Jobs.remove(job._id);
    }
}
