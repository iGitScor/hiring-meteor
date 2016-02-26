import {Jobs} from 'collections/jobs';

export function loadJobs() {
  if (Jobs.find().count() === 0) {

    var jobs = [
      {
        'name': 'UX Designer',
        'description': "Gère l'expérience utilisateur des projets",
        'location': 'Montpellier'
      },
      {
        'name': 'Responsable SEO',
        'description': "Gère les optimisations SEO de la marketplace",
        'location': 'Montpellier'
      },
      {
        'name': 'Happiness Manager',
        'description': "Apporte de la bonne humeur à l'équipe",
        'location': 'Montpellier'
      }
    ];

    for (var i = 0; i < jobs.length; i++) {
      Jobs.insert(jobs[i]);
    }
  }
};
