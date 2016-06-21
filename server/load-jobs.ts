import {Jobs} from 'collections/jobs';

export function loadJobs() {
  // Initial data insertion - startup system
  if (Jobs.find().count() === 0) {

    var jobs = [
      {
        'name': 'UX Designer',
        'description': "Gère l'expérience utilisateur des projets",
        'location': 'Montpellier',
        'public': true
      },
      {
        'name': 'Responsable SEO',
        'description': "Gère les optimisations SEO de la marketplace",
        'location': 'Montpellier',
        'public': true
      },
      {
        'name': 'Responsable service client',
        'description': "Gère la relation client",
        'location': 'Montpellier',
        'public': true
      },
      {
        'name': 'Logisticien',
        'description': 'Gestionnaire entrepôt de stockage',
        'location': 'Montpellier',
        'public': true
      }
    ];

    for (var jobIterator = 0; jobIterator < jobs.length; jobIterator++) {
      Jobs.insert(jobs[jobIterator]);
    }
  }
};
