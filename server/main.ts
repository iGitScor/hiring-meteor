import {loadJobs} from './load-jobs';

import './jobs';

Meteor.startup(loadJobs);
