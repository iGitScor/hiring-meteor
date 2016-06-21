import {Jobs} from 'collections/jobs';

function buildQuery(jobId?: string): Object {
  // Get jobs depending on ownership or public property
  var isAvailable = {
    $or: [
      { public: true },
      {
        $and: [
          { owner: this.userId },
          { owner: { $exists: true } },
        ],
      },
    ]
  };

  if (jobId) {
    return { $and: [{ _id: jobId }, isAvailable] };
  }

  return isAvailable;
}

Meteor.publish('jobs', function() {
  return Jobs.find(buildQuery.call(this));
});

Meteor.publish('job', function(jobId: string) {
  return Jobs.find(buildQuery.call(this, jobId));
});
