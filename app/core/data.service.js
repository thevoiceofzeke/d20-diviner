/**
 * @desc Service used to retrieve outages data from the public outages API
 * In its current state, this service will not work unless the outages-integration back end application is running.
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
			var startDate 	= moment().format('YYYY-MM-DD');
			var endDate 	= moment().format('YYYY-MM-DD');

			return $http.get('/api/v1/outages/' + startDate + '/' + endDate)
				.then(getOutagesComplete)
				.catch(getOutagesFailed);

			function getOutagesComplete(response) {
				return response.data;
			}

			function getOutagesFailed (error) {
				return 'Error retrieving data: \n' + error;
			}
		}
	}

})();