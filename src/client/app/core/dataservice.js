(function () {

    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$log'];

    function dataservice($http, $log) {

        var service = {
            createUser: createUser,
            getUsers: getUsers,
            removeUser: removeUser,
            updateUser: updateUser
        };

        return service;

        function getUsers() {
            return $http.get('/api/users')
                .then(function (data, status, headers, config) {
                    return data.data;
                })
                .catch(function (message) {
                    $log.error(message);
                });
        }

        function createUser(data) {
            return $http.post('/api/users', data)
                .then(function (data, status, headers, config) {
                    return data.data;
                })
                .catch(function (message) {
                    $log.error(message);
                });
        }

        function removeUser(id) {
            return $http({
                method: 'DELETE',
                url: '/api/users/' + id
            })
            .then(function(data, status, headers, config){
                return data.data;
            })
            .catch(function(message){
                $log.error(message);
            });
        }
        
        function updateUser(data) {
            return $http({
                    method: 'PUT',
                    url: '/api/users/' + data._id,
                    data: data
                })
                .then(function (data, status, headers, config) {
                    return data.data;
                })
                .catch(function (message) {
                    $log.error(message);
                });
        }

    }

})();