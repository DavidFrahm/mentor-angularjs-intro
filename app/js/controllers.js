'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('BasicController', function ($scope) {

		$scope.who = 'James';

		$scope.visible = true;

		$scope.show = function () {
			$scope.visible = true;
		};

		$scope.hide = function () {
			$scope.visible = false;
		};

	})
	.controller('HttpController', function ($scope, $http) {

		var _this = this;

		$scope.turles = null;

	  	_this.showList = function () {
	  		log('showList()');
	  		$http.get('http://tmnt-test-service.herokuapp.com/')
		  		.success(function (result) {
		  			log(result);
		  			console.table(result);
		  			log('turles as json: ' + angular.toJson(result));
		  			$scope.turtles = result;
		  		})
				.error(function (data, status, headers, config) {
					$scope.logAjaxError(data, status, headers, config);
				});
	  	};

	  	$scope.showList = function () {
	  		_this.showList();
	  	};

	  	_this.showList();

	})
;
