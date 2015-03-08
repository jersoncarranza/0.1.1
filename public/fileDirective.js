angular.module('fileDirective', [])
     .directive('file', function(){
        return {
          scope: {
            file: '='
          },
          restrict: 'A',
          templateUrl: 'file.html',
          controller: function($scope, files){
            files.find($scope.file.id, function(file) {
              $scope.flagURL = file.flagURL;
            });
          }
        };
      });