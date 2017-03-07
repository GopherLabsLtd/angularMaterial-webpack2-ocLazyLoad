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
            template: "Test template"
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