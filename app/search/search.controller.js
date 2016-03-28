(function() {
	'use strict';

	angular
		.module('myApp.search')
		.controller('SearchController', SearchController);

	function SearchController(dataservice) {
		var vm = this;

		vm.search = search;
		vm.terms  = terms;
		vm.subjects = subjects;
		vm.searchKeyword = '';
		vm.courseList = '';

		activate();

		function activate () {
			return [ terms(), subjects() ];
		}

		/////////////////

		function search() {
			getSearchResults();
		}

		function terms() {
			vm.terms = [
				'Spring',
				'Summer',
				'Fall'
			];
			return vm.terms;
		}

		function subjects() {
			vm.subjects = [
				'Math',
				'English'
			];
			return vm.subjects;
		}

		function getSearchResults() {
			// return dataservice.getSearchResults(vm.searchKeyword, vm.terms, vm.subjects).
			// 	then(function success(data) {
			// 		vm.courseList = data;
			// 		return vm.courseList;
			// });
		}
	}


})();