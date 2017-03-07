export default ngModule => {
    ngModule
    .controller('indexController', ['$scope', function($scope) {
        $scope.title = "Lazy loaded title";
    }]);
}