angular.module('mainApp',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.when('/tech2', '/tech1');
		$urlRouterProvider.otherwise('/tech1');

		$stateProvider
		.state('tech1',{
			url:'/tech1',
			templateUrl:'../../partials/workscreen/tech1.view.html',
			controller:'Tech1Controller'
		})
		.state('tech2',{
			url:'/tech2',
			templateUrl:'../../partials/workscreen/tech2.view.html',
			controller:'Tech2Controller'
		})
		.state('tech3',{
			url:'/tech3',
			templateUrl:'../../partials/workscreen/tech3.view.html',
			controller:'Tech3Controller'
		})
		.state('tech4',{
			url:'/tech4',
			templateUrl:'../../partials/workscreen/tech4.view.html',
			controller:'Tech4Controller'
		})
	})
	.controller('MainController',['$scope','$state',function($scope,$state){
			$scope.heading="Gaurav Seta";
			$scope.selectedTech='tech1';
			$scope.goTo=function(stateName){
				//console.log(stateName);
				$scope.selectedTech=stateName;
				$state.go(stateName);
			};

		}]);
		
