import {Component, View} from 'angular2/core';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {Jobs} from 'collections/jobs';

@Component({
  selector: 'jobs-form'
})
@View({
  templateUrl: '/client/jobs-form/jobs-form.html'
})
export class JobsForm {
  jobsForm: ControlGroup;

  constructor() {
    var fb = new FormBuilder();
    this.jobsForm = fb.group({
      name: ['', Validators.required],
      description: [''],
      location: ['Montpellier', Validators.required]
    });
  }

  addJob(job) {
    if (this.jobsForm.valid) {
      Jobs.insert({
        name: job.name,
        description: job.description,
        location: job.location
      });

      (<Control>this.jobsForm.controls['name']).updateValue('');
      (<Control>this.jobsForm.controls['description']).updateValue('');
      (<Control>this.jobsForm.controls['location']).updateValue('');
    }
  }
}
