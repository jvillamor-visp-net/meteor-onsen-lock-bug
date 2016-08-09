import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './app.html';

class AppCtrl {
   constructor() {

   }
}

const name = 'index';

export default angular.module( name, [
   angularMeteor
])

.config(config);

function config($stateProvider) {
   'ngInject';
   $stateProvider
   .state('app', {
      url: '/app',
      template: template,
      controller: AppCtrl,
      controllerAs: '$ctrl'
   });
}
