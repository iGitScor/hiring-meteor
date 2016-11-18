import { Component, View } from 'angular2/core';

import { FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';

import { Jobs } from 'collections/jobs';

@Component({
  selector: 'jobs-form'
})
@View({
  templateUrl: '/client/jobs-form/jobs-form.html'
})

export class JobsForm {

  defaultLocation: String = 'Montpellier';
  jobsForm: ControlGroup;

  constructor() {
    var formInstance = new FormBuilder();
    this.jobsForm = formInstance.group({
      name: ['', Validators.required],
      description: [''],
      location: [this.defaultLocation, Validators.required],
      public: [false]
    });
  }

  addJob(job) {
    if (this.jobsForm.valid) {
      // if (Meteor.userId()) {
        Jobs.insert({
          name: job.name,
          description: job.description,
          location: job.location,
          public: job.public,
          owner: Meteor.userId()
        });

        (<Control>this.jobsForm.controls['name']).updateValue('');
        (<Control>this.jobsForm.controls['description']).updateValue('');
        (<Control>this.jobsForm.controls['location']).updateValue(this.defaultLocation);
        (<Control>this.jobsForm.controls['public']).updateValue(false);
      // } else {
      //   alert('you are not looged in');
      // }
    }
  }
}
