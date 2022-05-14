angular
  .module("TickerApp", [])
  .controller("TickerCtrl", [
    "$scope",
    "$timeout",
    "$interval",
    "$http",
    function ($scope, $timeout, $interval, $http) {
      $http.get("events-mock.json").then(function (response) {
        $scope.events = response.data;
        $scope.events.forEach(event => {
          if (event.start.date) {
            event.eventDate = new Date(event.start.date);
            event.hasTime = false;
          } else if (event.start.dateTime){
            event.eventDate = new Date(event.start.dateTime);
            event.hasTime = true;
            if (event.end.dateTime) {
              event.eventEndDateTime = new Date(event.end.dateTime);
              event.hasEndTime = true;
            }
          }
        });
      });

      // $http.get("gcal-api.json").then(function (response) {
      //   $scope.events = response.data;
      //   $scope.events = $scope.events.items;
      //   $scope.events.forEach((event) => {
      //     if (event.start.date) {
      //       event.eventDate = new Date(event.start.date);
      //       event.hasTime = false;
      //     } else if (event.start.dateTime) {
      //       event.eventDate = new Date(event.start.dateTime);
      //       event.hasTime = true;
      //       if (event.end.dateTime) {
      //         event.eventEndDateTime = new Date(event.end.dateTime);
      //         event.hasEndTime = true;
      //       }
      //     }
      //   });
      // });

      /* This solution makes use of "simple access" to google, providing only an API Key.
       * This way we can only get access to public calendars. To access a private calendar,
       * we would need to use OAuth 2.0 access.
       *
       * "Simple" vs. "Authorized" access: https://developers.google.com/api-client-library/javascript/features/authentication
       * Examples of "simple" vs OAuth 2.0 access: https://developers.google.com/api-client-library/javascript/samples/samples#authorizing-and-making-authorized-requests
       *
       * We will make use of "Option 1: Load the API discovery document, then assemble the request."
       * as described in https://developers.google.com/api-client-library/javascript/start/start-js
       */
      function loadCalendarData() {
        // The "Calendar ID" from your calendar settings page, "Calendar Integration" secion:
        var calendarId = "sydneytemple13@gmail.com";

        // 1. Create a project using google's wizzard: https://console.developers.google.com/start/api?id=calendar
        // 2. Create credentials:
        //    a) Go to https://console.cloud.google.com/apis/credentials
        //    b) Create Credentials / API key
        //    c) Since your key will be called from any of your users' browsers, set "Application restrictions" to "None",
        //       leave "Website restrictions" blank; you may optionally set "API restrictions" to "Google Calendar API"

        // ================================================================
        // ENTER API KEY BELOW
        // ================================================================
        var apiKey = "AIzaSyDAokA9GzBC_hcjQoi0TgidP_oCpcF7TI4";

        // You can get a list of time zones from here: http://www.timezoneconverter.com/cgi-bin/zonehelp
        var userTimeZone = "Australia/Sydney";

        // Initializes the client with the API key and the Translate API.
        gapi.client
          .init({
            apiKey: apiKey,
            // Discovery docs docs: https://developers.google.com/api-client-library/javascript/features/discovery
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
            ],
          })
          .then(function () {
            // Use Google's "apis-explorer" for research: https://developers.google.com/apis-explorer/#s/calendar/v3/
            // Events: list API docs: https://developers.google.com/calendar/v3/reference/events/list
            return gapi.client.calendar.events.list({
              calendarId: calendarId,
              timeZone: userTimeZone,
              singleEvents: true,
              timeMin: new Date().toISOString(), //gathers only events not happened yet
              maxResults: 20,
              orderBy: "startTime",
            });
          })
          .then(
            function (response) {
              if (response.result.items) {
                console.log("response.result.items", response.result.items);
                $scope.events = response.result.items;
                $scope.events.forEach((event) => {
                  if (event.start.date) {
                    event.eventDate = new Date(event.start.date);
                    event.hasTime = false;
                  } else if (event.start.dateTime) {
                    event.eventDate = new Date(event.start.dateTime);
                    event.hasTime = true;
                    if (event.end.dateTime) {
                      event.eventEndDateTime = new Date(event.end.dateTime);
                      event.hasEndTime = true;
                    }
                  }
                });
              }
            },
            function (reason) {
              console.log("Error: " + reason.result.error.message);
            }
          );
      }

      // Loads the JavaScript client library and invokes `start` afterwards.
      // gapi.load("client", loadCalendarData);

      var tick = function () {
        $scope.clock = Date.now();
      };
      tick();
      // $interval(tick, 60000); // 60 seconds

      $scope.moving = false;

      $scope.moveUp = function () {
        $scope.moving = true;
        $timeout($scope.switchFirst, 2000);
      };

      $scope.switchFirst = function () {
        $scope.events.push($scope.events.shift());
        $scope.moving = false;
        $scope.$apply();
      };

      $interval($scope.moveUp, 4000);
    },
  ]);
