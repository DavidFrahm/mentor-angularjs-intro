'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function($rootScope, $scope, $http) {

    var _this = this;

  	$scope.who = 'Todd';

  	$scope.visible = false;

  	$scope.show = function() {
  		$scope.visible = true;
  	};

  	$scope.hide = function() {
  		$scope.visible = false;
  	};

  	$scope.showList = function() {
  		console.log('showList');
  		$http.get('http://tmnt-test-service.herokuapp.com/')
  		.success(function(result) {
  			console.log(result);
  			$scope.turtles = result;
  		});
  	};
  })
  .controller('MyCtrl2', function() {

  });