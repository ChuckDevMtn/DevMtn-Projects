angular.module("TriviaApp").service("MainService", function($http, $q){

this.goGetMyData = function (){
	return $http({url:"https://practiceapi.devmountain.com/api/trivia/questions/" ,
					  method: "GET"});
};

});
