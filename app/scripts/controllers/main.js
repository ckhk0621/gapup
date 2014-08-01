'use strict';

/**
 * @ngdoc function
 * @name gapupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gapupApp
 */
angular.module('gapupApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
