'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider.
        when('/ng1/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/ng1/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/ng1/app', {
          template: '<ng2-app></ng2-app>'
        }).
        when('/', {
          template: '<phone-list></phone-list>'
        })
    }
  ]);
