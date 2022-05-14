angular
  .module("events", [])
  .controller("EventsController", function ($scope, $http) {
    $http.get("ts-events-mock.json").then(function (response) {
      $scope.events = response.data;
      // console.log("events", $scope.events);
      $scope.init();
      setTimeout(function() { $scope.init(); console.log("events", $scope.events);}, 3000);
    });

    $scope.init = function () {
      var slider = tns({
        container: ".my-slider",
        items: 5,
        slideBy: 1,
        speed: 200,
        axis: "vertical",
        autoplay: true,
        controls: false,
        nav: false,
        touch: false,
        autoHeight: false,
      });
    };

    var tick = function () {
      $scope.clock = Date.now();
    };
    tick();

  });
