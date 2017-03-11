angular.module("TriviaApp").controller( "MainCTRL" , function($scope,MainService){

	MainService.goGetMyData().then(function(result){
		$scope.jiberish = result.data
		console.log($scope.jiberish);
	})


});
