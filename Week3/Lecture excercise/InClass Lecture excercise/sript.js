// Code goes here

angular.module("firstApp", [])

angular.module("firstApp")
       .controller("mainCtrl", function($scope, $timeout){
          $scope.test = "DM20 wins!"

          $timeout(function(){
            $scope.test = "DM20 really really wins!"
          }, 2000);

          $scope.twoWay = "Start text"

          $scope.comics = ["Batman", "Superman", "wolverine", "watchman", "wonderwoman"];

          $scope.foods = [];

          $scope.isAwesome = true;

          $scope.isAdmin = true;

          $scope.toggleClick = function(){
            $scope.isAwesome = !$scope.isAwesome;
          }

          $scope.movies = [{
            title: "Logan",
            year: 2017,
            stars: 4.5
          }, {
            title: "Interstellar",
            year: 2015,
            stars: 4
          }, {
            title: "Lego",
            year: 1999,
            stars: 3.5
          }]
       })
