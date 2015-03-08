angular.module('filesFactory', [])
       .factory('files', function($http){
        return {
          list: function (callback){
            $http({
              method: 'GET',
              url: 'http://127.0.0.1:7000/files/list/',
              cache: true
            }).success(callback);
          },
          find: function(id, callback){
            $http({
              method: 'GET',
              url: 'http://127.0.0.1:7000/files/see/'+id,
              cache: true
            }).success(callback);
          }
        };
      });