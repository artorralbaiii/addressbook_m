(function () {
    'use strict';

    angular
        .module('app.users')
        .config(getRoutes);

    getRoutes.$inject = ['$routeProvider', '$locationProvider'];

    function getRoutes($routeProvider, $locationProvider) {

        $routeProvider
        
        .when('/', {
            templateUrl: 'app/users/users.html',
            controller: 'Users',
            controllerAs: 'vm'
        });
        
    }

})();