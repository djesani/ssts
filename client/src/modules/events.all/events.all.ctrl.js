angular
    .module('sstsApp')
    .controller('EventsAllCtrl', function($scope, $http, apiUrl) {

        $http.get(apiUrl + '/data.json').then(function successCallBack(response) {

            $scope.events = response.data.events;

            $('#gridtab-container').gridtab({
                grid: 3,
                tabPadding: 0,
                borderWidth: 30,
                contentPadding: 40
            });

        })

    });