(function() {
	'use strict';

	angular
		.module('app.home')
		.controller('HomeController', HomeController);

	function HomeController() {
		var vm = this;

		//////////////////////
		// BINDABLE MEMBERS //
		//////////////////////
		vm.dice = [];

		/////////////////////
		// EXPOSED METHODS //
		/////////////////////
		vm.roll 		= roll;
		vm.init 		= init;

		init();

		/**
		 * Reset the view to its initial state
		 */
		function init() {
			vm.dice = [
				{ name: 'D4', multiplier: 4, result: 0, timesRolled: 1, icon: 'd4' },
				{ name: 'D6', multiplier: 6, result: 0, timesRolled: 1, icon: 'd6' },
				{ name: 'D8', multiplier: 8, result: 0, timesRolled: 1, icon: 'd8' },
				{ name: 'D10', multiplier: 10, result: 0, timesRolled: 1, icon: 'd10'},
				{ name: 'D12', multiplier: 12, result: 0, timesRolled: 1, icon: 'd12' },
				{ name: 'D20', multiplier: 20, result: 0, timesRolled: 1, icon: 'd20' }
			];
		}

		/**
		 * Roll a die with the given name and type
		 * @param name	The name of the die to roll
		 * @param type	The type of die to roll
		 * @param isAdditionalRoll	True if the result should be added to an existing roll of that type
		 */
		function roll(name, type, isAdditionalRoll) {
			var result = (Math.floor(Math.random()*type)+1);
			angular.forEach(vm.dice, function(key, value) {
				if (key.name === name) {
					if (!isAdditionalRoll) {
						key.result = result;
					} else {
						key.result += result;
						key.timesRolled++;
					}
				}
			});
		}
	}

})();