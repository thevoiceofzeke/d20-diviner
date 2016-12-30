(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	/**
	 * Base application configuration is done here.
	 * @param $routeProvider used to set the root route of the app
	 * @param $locationProvider used to set the app to use html5 mode
	 * @param $mdThemingProvider used to adjust the app's color palette
	 */
	function config($routeProvider, $locationProvider, $mdThemingProvider, $mdIconProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'view-home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			})
			.when('/RoW', {
				templateUrl: 'view-RoW/RoW.html',
				controller: 'RoWController',
				controllerAs: 'vm'
			})
			.when('/sheet', {
				templateUrl: 'view-character-sheet/character-sheet.html',
				controller: 'CharacterController',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});

		$mdIconProvider
			.icon('person', 'assets/svg/person.svg', 24)
			.icon('home', 'assets/svg/home.svg', 24)
			.icon('d4', 'assets/svg/d4.svg', 24)
			.icon('d6', 'assets/svg/d6.svg', 24)
			.icon('d8', 'assets/svg/d8.svg', 24)
			.icon('d10', 'assets/svg/d10.svg', 24)
			.icon('d12', 'assets/svg/d12.svg', 24)
			.icon('d20', 'assets/svg/d20.svg', 24)
			.icon('rod-of-wonder', 'assets/svg/rod-of-wonder.svg', 24);

		$mdThemingProvider.definePalette('d20Primary', {
			'50': '#ffffff',
			'100': '#d5e8ec',
			'200': '#aed3db',
			'300': '#7cb8c5',
			'400': '#67acbb',
			'500': '#52a1b2',
			'600': '#478f9f',
			'700': '#3d7c8a',
			'800': '#346974',
			'900': '#2a565f',
			'A100': '#aed3db',
			'A200': '#52a1b2',
			'A400': '#67acbb',
			'A700': '#3d7c8a',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400',
			'contrastLightColors': undefined
		});
		$mdThemingProvider.definePalette('d20Accent', {
			'50': '#ffffff',
			'100': '#fcf6f6',
			'200': '#efcbcb',
			'300': '#de9494',
			'400': '#d77c7c',
			'500': '#d06565',
			'600': '#c94e4e',
			'700': '#be3a3a',
			'800': '#a63333',
			'900': '#8f2c2c',
			'A100': '#EFCBCB',
			'A200': '#D06565',
			'A400': '#d77c7c',
			'A700': '#be3a3a',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400',
			'contrastLightColors': undefined
		});
		$mdThemingProvider.definePalette('d20Warn', {
			'50': '#ffffff',
			'100': '#f7e7dc',
			'200': '#edc7ae',
			'300': '#df9f74',
			'400': '#da8e5b',
			'500': '#d47d42',
			'600': '#ca6d2e',
			'700': '#b15f28',
			'800': '#985223',
			'900': '#7f441d',
			'A100': '#edc7ae',
			'A200': '#d47d42',
			'A400': '#da8e5b',
			'A700': '#b15f28',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 500 600 A100 A200 A400',
			'contrastLightColors': undefined
		});
		$mdThemingProvider.theme('default')
			.primaryPalette('d20Primary')
			.accentPalette('d20Accent')
			.warnPalette('d20Warn');
	}
})();