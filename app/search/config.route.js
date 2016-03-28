(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular
		.module('myApp')
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/search', {
				templateUrl: 'search/search.html',
				controller: 'SearchController',
				controllerAs: 'vm'
			}).
			otherwise({redirectTo: '/search'});
		}]);

})();
