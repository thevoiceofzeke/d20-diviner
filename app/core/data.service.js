(function() {
	'use strict';

	angular
		.module('myApp.core')
		.factory('dataservice', dataservice);

	dataservice.$inject = ['$http', '$location'];

	function dataservice($http, $location) {

		var service = {
			getSearchResults: getSearchResults,
		};

		return service;

		function getSearchResults() {
			// return $http.get('/api/maa')
			//	 .then(getSearchResultsComplete)
			//	 .catch(getSearchResultsFailed);

			// function getSearchResultsComplete(response) {
			//	 return data;
			// }

			// function getSearchResultsFailed (errors) {
			//	 logger.error('XHR Failed for getAvengers.' + error.data);
			// }
		}
	}

})();