/**
 * @desc Example service used to retrieve nothing in particular
 * This is just here as a stub
 */
(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('dataService', dataService);

	dataService.$inject = ['$http'];

	function dataService($http) {

		var service = {
			getSampleData: getSampleData
		};

		return service;

		function getSampleData() {

			return $http.get('')
				.then(getDataComplete)
				.catch(getDataFailed);

			function getDataComplete(response) {
				return response.data;
			}

			function getDataFailed (error) {
				return 'Error retrieving data: \n' + error;
			}
		}
	}

})();