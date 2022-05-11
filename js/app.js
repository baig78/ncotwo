var myApp = angular.module('Productportfolio', ['ngRoute']);

myApp.controller('ProductCtrl', ['$scope', function($scope) {
    var vm = this;
}]);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'ProductCtrl'
        })

    .when('/private', {
        templateUrl: 'private.html',
        controller: 'ProductCtrl'
    })

    // .otherwise({
    //     redirectTo: '/home',
    //     controller: 'ProductCtrl'
    // });
}]);