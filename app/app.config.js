(function() {
    'use strict';

    angular
        .module('myApp')
        .config(config);

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();