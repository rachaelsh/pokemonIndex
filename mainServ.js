angular.module("pokemonApp")
.service("mainServ", function($http){

this.getList = function(){
  return $http({
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokemon"
  }).then(function(response){
    return response.data.results;
  });
};

  this.getPoke = function(url){
    return $http({
      method: "GET",
      url: url
    }).then(function(response){
      return response.data;
    });
};





});



// when you get to the API request you will have to do a request for all chars, then ANOTHER API request for the individual character information
