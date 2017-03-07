export default (ngModuleRef, angularRef) => {
    ngModuleRef.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', '$compileProvider', '$qProvider', function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider, $compileProvider, $qProvider) {
        $qProvider.errorOnUnhandledRejections(false);

        $compileProvider.debugInfoEnabled(false);

        $ocLazyLoadProvider.config({
            debug: true,
            events: true
        });
        
        $stateProvider
        .state('index', {
            url: '/',
            controller: 'indexController',
            templateProvider: ['$q', function ($q) {
                let deferred = $q.defer();
                require.ensure(['./index/index.html'], function () {
                    let template = require('./index/index.html');
                    deferred.resolve(template);
                });

                return deferred.promise;
            }],
            resolve: {
                foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure([], function () {
                        let module = require('./index/index.js')(angularRef);
                        $ocLazyLoad.load({
                            name: 'myAppIndex'
                        });
                        deferred.resolve(module);
                    });
                    
                    return deferred.promise;
                }]
           }
        })

        .state('user', {
            url: '/user/{userName}',
            controller: 'userController',
            templateProvider: ['$q', function ($q) {
                let deferred = $q.defer();
                require.ensure(['./user/index.html'], function () {
                    let template = require('./user/index.html');
                    deferred.resolve(template);
                });

                return deferred.promise;
            }],
            resolve: {
                foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure([], function () {
                        let module = require('./user/index.js')(angularRef);
                        $ocLazyLoad.load({
                            name: 'myAppUser'
                        });
                        deferred.resolve(module);
                    });
                    
                    return deferred.promise;
                }]
           },
           params: { 
                user: null
           }
        })

        $urlRouterProvider.otherwise('/');
    }])

    .run(['$templateCache', function($templateCache) {
        $templateCache.removeAll();
    }])

    .controller("myAppCtrl", ['$scope', function($scope) {
        $scope.title = "Hello";
    }])
}