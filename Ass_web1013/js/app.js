
var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/trangchu");

    $stateProvider
      .state('state1', {
        url: "/trangchu",
        templateUrl: "trangchu.html"
      })
     
      .state('state2', {
        url: "/gioithieu",
        templateUrl: "gioithieu.html"
      })

      .state('state3', {
        url: "/tintuc1",
        templateUrl: "./tintuc1.html"
      })
    
      .state('state4', {
        url: "/tintuc2",
        templateUrl: "./tintuc2.html"
      })
      .state('state5', {
        url: "/tainguyen",
        templateUrl: "./tainguyen.html"
      })
      .state('state6', {
        url: "/lienhej",
        templateUrl: "./lienhe.html"
      })
  });
  app.controller('myCtrl', function($scope, $http) {
    $http.get("./tintuc.json")
    .then(function(response) {
      $scope.myWelcome = response.data;
      console.log($scope.myWelcome)
    });
  });