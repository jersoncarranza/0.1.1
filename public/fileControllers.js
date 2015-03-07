 var fileControllers = angular.module('fileControllers', []);

fileControllers.controller('FileListCtrl', function ($scope, countries){
  countries.list(function(countries) {
    $scope.countries = countries;
  });
});

fileControllers.controller('FileDetailCtrl', function ($scope, $routeParams, countries){
  countries.find($routeParams.countryId, function(country) {
    $scope.country = country;
  });
});
