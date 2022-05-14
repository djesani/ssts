angular
  .module("events", [])
  .controller("EventsController", function ($scope, $http, $interval) {
    $http.get("ts-events-mock.json").then(function (response) {
      $scope.events = response.data;

      angular.element(document).ready(function () {
        // $scope.init();
        console.log("events", $scope.events);
    });

    });

    $scope.init = function () {
       tns({
        container: '.my-slider',
        slideBy: 1,
        axis: 'vertical',
        autoplay: true,
        controls: false,
        nav: false,
        touch: false,
        autoHeight: false,
        gutter: 10,
        items: 10,
        speed: 2000,
        autoplayTimeout: 2000
      });
    };

    var tick = function () {
      $scope.clock = Date.now();
    };
    tick();
    $interval(tick, 1000); // 1 second

  });
