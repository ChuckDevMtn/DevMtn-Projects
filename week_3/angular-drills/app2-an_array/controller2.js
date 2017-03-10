angular.module("App2").controller ("Controller2", function($scope,myService) {
function getNewData(){
	$scope.newdata = myService.getData();
}
	getNewData();


console.log(myData)
 });
