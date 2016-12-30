(function() {
	'use strict';

	angular
		.module('app')
		.controller('ToolbarController', ToolbarController)
		.controller('SidenavController', SidenavController);

	/**
	 * Controller for the app toolbar
	 * @param $mdSidenav
	 * @param $log
	 * @param $location
	 * @constructor
	 */
	function ToolbarController($mdSidenav, $log, $location) {
		var vm = this;

		/////////////////////
		// EXPOSED METHODS //
		/////////////////////
		vm.toggleSidenav 	= toggleSidenav;

		function toggleSidenav() {
			$mdSidenav('left').toggle();
		}
	}

	/**
	 * Controller for the side navigation menu
	 * @param $mdSidenav
	 * @param $log
	 * @param $location
	 * @constructor
	 */
	function SidenavController($mdSidenav, $log, $location) {
		var navCtrl = this;

		/////////////////////
		// EXPOSED METHODS //
		/////////////////////
		navCtrl.close 			= close;
		navCtrl.navigateTo 	= navigateTo;

		//////////////////////
		// BINDABLE MEMBERS //
		//////////////////////
		navCtrl.settings = [
			{ name: 'Home', icon: 'home', url: '/'},
			{ name: 'Character Sheet', icon: 'person', url: '/sheet' },
			{ name: 'Rod of Wonder', icon: 'rod-of-wonder', url: '/RoW' }
		];

		/**
		 * Navigate to the given url
		 * @param url
		 */
		function navigateTo(url) {
			$location.path(url);
		}

		/**
		 * Close the side nav menu (not currently in use)
		 */
		function close() {
			$mdSidenav('left').close()
				.then(function() {
					$log.debug("close sidenav is done");
				});
		}
	}

})();