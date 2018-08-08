angular.module('sstsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('events', {
                abstract: true,
                url: '/events',
                template: '<div ui-view></div>'
            })
            .state('events.all', {
                url: '/all',
                controller: 'EventsAllCtrl',
                controllerAs: 'vm',
                templateUrl:'modules/events.all/events.all.html',
            })
    });

