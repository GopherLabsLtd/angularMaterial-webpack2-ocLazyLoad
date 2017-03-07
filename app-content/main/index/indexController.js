export default ngModule => {
    ngModule
    .controller('indexController', ['$scope', '$state', function($scope, $state) {
        $scope.title = "Select some users";

        var currentDate = Math.floor(Date.now());

        $scope.people = [
            { name: 'Janet Perkins', img: '3.jpg', dateJoined: currentDate - 500, gender: "Female" },
            { name: 'Mary Johnson', img: '5.jpg', dateJoined: currentDate - 2500, gender: "Female" },
            { name: 'Peter Carlsson', img: '1.jpg', dateJoined: currentDate - 10500, gender: "Male" },
            { name: 'John Cage', img: '4.jpg', dateJoined: currentDate - 32500, gender: "Male" },
            { name: 'David Kellerman', img: '2.jpg', dateJoined: currentDate - 54500, gender: "Male" }
        ];

        $scope.selected = {};
        $scope.select = function(name) {
            if ($scope.selected[name] !== undefined && $scope.selected[name] === true) {
                delete $scope.selected[name]; 
            } else {
                $scope.selected[name] = true;
            }
        };

        $scope.usersSize = function() {
            var keys = Object.keys($scope.selected);
            var number = 0;

            for (var i = 0; i < keys.length; i++) {
                if ($scope.selected[keys[i]] === true) number++;
            }

            return number;
        };

        $scope.userInfo = function(user) {
            $state.go('user', {userName: user.name.toLowerCase().replace(/\s/g, ''), user: user});
        };
    }]);
};