import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as App} from './ui/pages/app/app';

const name = 'index';

export default angular.module( name, [
   angularMeteor,
   uiRouter,
   App
]);
