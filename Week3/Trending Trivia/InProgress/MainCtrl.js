angular.module("TriviaApp")
	.controller( "MainCTRL" , function($scope,MainService){

	MainService.goGetMyData().then(function(result){
		$scope.words = result.data
		console.log($scope.words);
	})
$scope.modal = true;

});
