var app = angular.module("kirtans", ["ngRoute"]);

app.constant('API', { url: "api" } );

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "kirtans-search.html",
      controller: "kirtanSearchCtrl",
    })
    .when("/kirtans/:id", {
      templateUrl: "kirtans.html",
      controller: "kirtansCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
  $locationProvider.html5Mode(true);
});

app.controller("kirtanSearchCtrl", function ($scope, $http, API) {
  $scope.getAllKirtans = function () {
    console.log("call");
    $http.get(`http://localhost:3000/${API.url}/kirtans/search`).then(function (response) {
      $scope.data = response.data;
      $scope.kirtans = $scope.data.data;
    });
  };
  $scope.getAllKirtans();
});

app.controller("kirtansCtrl", function ($scope, $http, API, $routeParams) {
  $scope.kirtanNo = $routeParams.id;
  $scope.getLines = function (text) {
    return text.split("\n");
  };
  $scope.getKirtan = function () {
    $http
      .get(`http://localhost:3000/${API.url}/kirtans/` + $scope.kirtanNo)
      .then(function (response) {
        $scope.data = response.data;

        console.log('$scope.data', $scope.data)
        // $scope.data = $scope.data.data[0];
        $scope.data.description_english2 = $scope.getLines($scope.data.description_english);
        $scope.data.description_gujarati2 = $scope.getLines($scope.data.description_gujarati);

        console.log('$scope.data.description_english2', $scope.data.description_english2);


        $scope.arrayCountEnglish = $scope.data.description_english.length;
        $scope.arrayCountGujarati = $scope.data.description_gujarati.length;
        $scope.data.description_english = [];
        for (let i = 0; i < $scope.arrayCountEnglish; i++) {
          $scope.data.description_english[i] = {
            english: $scope.data.description_english[i],
            gujarati: $scope.data.description_gujarati[i],
          };
        }
      });
  };
  $scope.getKirtan();
});
