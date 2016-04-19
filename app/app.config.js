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
	function config($routeProvider, $locationProvider, $mdThemingProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});

		// TODO: Color palettes will need some work in the future
		$mdThemingProvider.definePalette('uwPrimary', {
			'50': 'FED5D7',
			'100': 'FC8B8F',
			'200': 'FB545A',
			'300': 'F90E17',
			'400': 'E3060E',
			'500': 'C5050C',
			'600': 'A7040A',
			'700': '890308',
			'800': '6B0307',
			'900': '4E0205',
			'A100': 'FED5D7',
			'A200': 'FC8B8F',
			'A400': 'E3060E',
			'A700': '890308',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
												// on this palette should be dark or light
			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
				'200', '300', '400', 'A100'],
			'contrastLightColors': undefined    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('uwWarn', {
			'50': 'FFFFFF',
			'100': 'F9E7D7',
			'200': 'F2C9A6',
			'300': 'EAA368',
			'400': 'E6934D',
			'500': 'E28332',
			'600': 'D7731E',
			'700': 'BC651B',
			'800': 'A15717',
			'900': '874813',
			'A100': 'FFFFFF',
			'A200': 'F9E7D7',
			'A400': 'E6934D',
			'A700': 'BC651B',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
												// on this palette should be dark or light
			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
				'200', '300', '400', 'A100'],
			'contrastLightColors': undefined    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('uwAccent', {
			'50': 'FED5D7',
			'100': 'C5050C',
			'200': 'FB545A',
			'300': 'F90E17',
			'400': 'E3060E',
			'500': 'C5050C',
			'600': 'A7040A',
			'700': '890308',
			'800': '6B0307',
			'900': '4E0205',
			'A100': 'FED5D7',
			'A200': 'C5050C',
			'A400': 'E3060E',
			'A700': '890308',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
												// on this palette should be dark or light
			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
				'200', '300', '400', 'A100'],
			'contrastLightColors': undefined    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.theme('default')
			.primaryPalette('uwPrimary')
			.warnPalette('uwWarn')
			.accentPalette('uwAccent');
	}
})();