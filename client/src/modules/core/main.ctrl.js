angular
    .module('sstsApp')
    .controller('MainCtrl', function($state) {

        $state.go('events.all');

    });
