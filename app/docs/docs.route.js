(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular
		.module('app')
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/docs', {
				templateUrl: 'docs/docs.html',
				controller: 'DocsController',
				controllerAs: 'vm'
			}).
				otherwise({redirectTo: '/docs'});
		}]);

})();
