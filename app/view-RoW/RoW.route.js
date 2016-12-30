(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular
		.module('app')
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/RoW', {
				templateUrl: 'view-RoW/RoW.html',
				controller: 'RoWController',
				controllerAs: 'vm'
			}).
			otherwise({redirectTo: '/'});
		}]);

})();
