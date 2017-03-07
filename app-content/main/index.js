require('oclazyload');

require('./styles/main.scss');
require('./styles/mdi/css/materialdesignicons.css');

require('../../node_modules/angular-material/angular-material.scss');

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./img/', true, /\.(jpg|png|ico)$/));

const angularRef = require('angular');
const ngModuleRef = Angular.module('myApp', [require('angular-material'), require('angular-ui-router'), require('angular-animate'), 'oc.lazyLoad']);

require('./main')(ngModuleRef, angularRef);