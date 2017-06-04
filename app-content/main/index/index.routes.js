export default ($stateProvider, angularRef) => {
        $stateProvider
        .state('index', {
            url: '/',
            controller: 'indexController',
            templateProvider: ['$q', function ($q) {
                let deferred = $q.defer();
                require.ensure(['./index.html'], function () {
                    let template = require('./index.html');
                    deferred.resolve(template);
                });

                return deferred.promise;
            }],
            resolve: {
                foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure([], function () {
                        let module = require('./index.js')(angularRef);
                        $ocLazyLoad.load({
                            name: 'myAppIndex'
                        });
                        deferred.resolve(module);
                    });
                    
                    return deferred.promise;
                }]
           }
        })
}