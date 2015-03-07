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
      controller: 'FileListCtrl'
    }).
    when('/:countryId', {
      templateUrl: 'file-detail.html',
      controller: 'FileDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});
