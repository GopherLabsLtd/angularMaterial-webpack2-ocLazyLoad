const angularRef = require('angular');
require('oclazyload');

require('./styles/main.scss');
require('../../node_modules/mdi/css/materialdesignicons.css');

require('../../node_modules/angular-material/angular-material.css');

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./img/', true, /\.(jpg|png|ico)$/));

const ngModuleRef = angularRef.module('myApp', [require('angular-material'), require('angular-ui-router'), require('angular-animate'), 'oc.lazyLoad']);
require('./main')(ngModuleRef, angularRef);