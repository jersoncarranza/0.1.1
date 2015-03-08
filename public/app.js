var MyApp = angular.module('MyApp', [
  'ngRoute',
  'fileControllers',
  'filesFactory',
  'fileDirective'
]);

 MyApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'file-list.html',
            controller: 'FilesListCtrl'
          }).
          when('/:FileId', {
            templateUrl: 'file-detail.html',
            controller: 'FileyDetailCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      });