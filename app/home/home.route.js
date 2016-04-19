(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular
		.module('app')
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/home', {
				templateUrl: 'home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			}).
			otherwise({redirectTo: '/home'});
		}]);

})();
