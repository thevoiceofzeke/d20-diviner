(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular
		.module('app')
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/sheet', {
				templateUrl: 'view-character-sheet/character-sheet.html',
				controller: 'CharacterController',
				controllerAs: 'vm'
			}).
			otherwise({redirectTo: '/sheet'});
		}]);

})();
