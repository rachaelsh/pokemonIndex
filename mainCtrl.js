angular.module("pokemonApp").controller("mainCtrl", function($scope, mainServ){

  $scope.getList = function(){
    mainServ.getList()
    .then(function(response){
      $scope.data = response;

    });
  };
$scope.getList();


  $scope.getPoke = function(url){

    mainServ.getPoke(url)
    .then(function(response){
      console.log(response);
      $scope.onedata = response;
    });
  };


});
