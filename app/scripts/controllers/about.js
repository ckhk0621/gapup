'use strict';

/**
 * @ngdoc function
 * @name gapupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gapupApp
 */
angular.module('gapupApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
