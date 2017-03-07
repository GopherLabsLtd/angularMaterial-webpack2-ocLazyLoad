export default ngModule => {
    ngModule
    .controller('userController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
        if ($stateParams.user !== undefined && $stateParams.user !== null) {
            $scope.user = $stateParams.user;
        } else {
            $state.go("index");
        }
    }]);
};