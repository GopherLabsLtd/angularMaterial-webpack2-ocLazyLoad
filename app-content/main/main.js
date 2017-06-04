export default (ngModuleRef, angularRef) => {
    ngModuleRef.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', '$compileProvider', '$qProvider', function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider, $compileProvider, $qProvider) {
        $qProvider.errorOnUnhandledRejections(false);

        $compileProvider.debugInfoEnabled(false);

        $ocLazyLoadProvider.config({
            debug: true,
            events: true
        });
        
        // Find all files in this directory or it's sub-directories
        // With an extension of ".routes.js" and import them here
        function requireAll(r) {
            for (var i = 0; i < r.keys().length; i++) {
                require(r.keys()[i] + "")($stateProvider, angularRef);
            }
        }
        requireAll(require.context('./', true, /\.routes.js$/));

        $urlRouterProvider.otherwise('/');
    }])

    .run(['$templateCache', function($templateCache) {
        $templateCache.removeAll();
    }])

    .controller("myAppCtrl", ['$scope', function($scope) {
        $scope.title = "Hello";
    }])
}