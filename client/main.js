import angular from 'angular';
import angularMeteor from 'angular-meteor';

import Index from '../imports/index';

function onReady(){
   angular.bootstrap(document, [ Index.name ]);
}

if (Meteor.isCordova) {
   angular.element(document).on('deviceready', onReady);
} else {
   angular.element(document).ready(onReady);
}
