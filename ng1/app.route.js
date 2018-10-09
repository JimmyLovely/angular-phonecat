'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider.
        when('/ng1/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/ng1/other', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise({
          template: ''
        })
    }
  ]);

angular.
  module('phonecatApp').run([
    '$rootScope',
    function ($rootScope) {
      $rootScope.$on('$routeChangeStart', function (event, next, current) {

        var upgradedRoutes = ['/ng1/ignore'];
        if (next && upgradedRoutes.indexOf(next.originalPath) > -1 ) {
          event.preventDefault();
        }
        var next = next ? next.originalPath : '';
        console.log(next);
      });
    }
  ]);
