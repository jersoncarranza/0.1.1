angular.module('fileDirective', [])
       .directive('country', function(){
  return {
    scope: { country: '=' },
    restrict: 'A',
    templateUrl: 'file.html',
    controller: function($scope, countries){
      countries.find($scope.country.id, function(country) {
      $scope.flagURL = country.flagURL;
      });
    }
  };
});
