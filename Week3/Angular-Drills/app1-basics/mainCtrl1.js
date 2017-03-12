angular.module('app1').controller('mainCtrl1', function($scope,myService1){

$scope.numArray = myService1.getNumbers();
console.log('ctrl', $scope.numArray);


})
