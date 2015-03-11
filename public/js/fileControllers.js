 var fileControllers = angular.module('fileControllers', []);

fileControllers.controller('FilesListCtrl', function ($scope, files){
        files.list(function(files) {
          $scope.files = files;
        });
      });

fileControllers.controller('FileyDetailCtrl', function ($scope, $routeParams, files){
        files.find($routeParams.FileId, function(file) {
          $scope.file = file;
        });
      });
