var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.x=false;
    $scope.y=true;
    $scope.searching = function() {
	    $scope.x=true;
        $http.get("http://www.omdbapi.com/?apikey=20ea02d5&t=" + $scope.search).then(function(response) {
            $scope.name = response.data.Title;
            $scope.bio = response.data.Plot;
            $scope.genre = response.data.Genre;
            $scope.date = response.data.Released;
            $scope.director = response.data.Director;
            $scope.boxoffice = response.data.BoxOffice;
            $scope.website = response.data.Website;
            $scope.poster = response.data.Poster;
     })};
	$scope.cls= function() {
		$scope.x= false;
	}
    $scope.intro=function() {
        $scope.y = !$scope.x;
    }
});


$(document).ready(function() {
    $(window).scroll(function () { 
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 170) {
            $('#nav').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 170) {
            $('#nav').removeClass('navbar-fixed');
        }
  });
});



$("#nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash); 
    });


