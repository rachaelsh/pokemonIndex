angular.module("pokemonApp", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home", { //will describe your states like:
    url: "/",
    templateUrl: "./public/home.html",
    controller: "homeCtrl"
  })
  .state("list", {
    url: "/list",
    templateUrl: "./public/list.html"
  })
  .state("details", {
    url: "/details",
    templateUrl: "./public/details.html"
  });

  $urlRouterProvider.otherwise("/");
});
