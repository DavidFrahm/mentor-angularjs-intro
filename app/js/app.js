'use strict';

window.log = function(string) {
	if (typeof console === 'object') {
		console.log(string);
	}
};

angular.module('myApp', ['myApp.controllers', 'myApp.directives', 'myApp.filters', 'myApp.services'])
	.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/view1', {
				templateUrl: 'partials/using-no-controller.html'
			});
			$routeProvider.when('/view2', {
				templateUrl: 'partials/using-controller.html',
				controller: 'BasicController'
			});
			$routeProvider.when('/view3', {
				templateUrl: 'partials/using-http.html',
				controller: 'HttpController'
			});
			$routeProvider.otherwise({
				redirectTo: '/view1'
			});
		}
	])
	.run(function($rootScope) {
		$rootScope.logAjaxError = function (data, status, headers, config) {
			log('	Ajax error = data: ' + angular.toJson(data));
			log('	Ajax error = status: ' + angular.toJson(status));
			log('	Ajax error = headers: ' + angular.toJson(headers));
			log('	Ajax error = config: ' + angular.toJson(config));
		};
	});
