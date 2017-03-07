export default ngModule => {
    ngModule
    .controller('userController', ['$scope', '$stateParams', function($scope, $stateParams) {
        if ($stateParams.user !== undefined && $stateParams.user !== null) {
            $scope.user = $stateParams.user;
        }
    }]);
};