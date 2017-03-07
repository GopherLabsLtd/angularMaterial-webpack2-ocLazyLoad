export default ngModule => {
    ngModule
    .controller('indexController', ['$scope', function($scope) {
        $scope.title = "Select some users";

        $scope.people = [
            { name: 'Janet Perkins', img: '3.jpg', newMessage: true },
            { name: 'Mary Johnson', img: '5.jpg', newMessage: false },
            { name: 'Peter Carlsson', img: '1.jpg', newMessage: false },
            { name: 'John Cage', img: '4.jpg', newMessage: false },
            { name: 'David Kellerman', img: '2.jpg', newMessage: false }
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
    }]);
};