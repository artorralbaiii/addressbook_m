(function () {
    'use strict';

    angular
        .module('app.users')
        .controller('Users', Users);

    Users.$inject = ['dataservice'];

    function Users(dataservice) {

        var vm = this;
        vm.cancelEdit = cancelEdit;
        vm.createUser = createUser;
        vm.deleteRowData = deleteRowData;
        vm.editMode = false;
        vm.getRowData = getRowData;
        vm.sending = false;
        vm.updateUser = updateUser;
        vm.user = {};
        vm.users = [];

        activate();

        //////////

        function activate() {
            return getUsers();
        }
        
        function cancelEdit() {
            vm.editMode = false;
            vm.user = {};
        }

        function createUser() {
            vm.sending = true;
            /* jshint -W117 */
            var userC = _.clone(vm.user);
            /* jshint +W117 */

            dataservice.createUser(userC).then(function (data) {
                vm.users.push(data);
                vm.user = {};
                vm.sending = false;
            });
        }

        function deleteRowData(data) {
            /* jshint -W117 */
            bootbox
                .confirm('Are you sure you want to delete "' + data.firstName + ' ' + data.lastName + '"?',
                    function (result) {
                        if (result) {
                            dataservice.removeUser(data._id).then(function (data) {
                                vm.users.splice(_.findIndex(vm.users, {
                                    _id: data._id
                                }), 1);
                            });
                        }
                    });
            /* jshint +W117 */
        }

        function getRowData(data) {
            /* jshint -W117 */
            var dataC = _.clone(data);
            /* jshint +W117 */

            vm.editMode = true;
            vm.user = dataC;
        }

        function getUsers() {
            dataservice.getUsers().then(function (data) {
                vm.users = data;
                return vm.users;
            });
        }

        function updateUser() {
            vm.sending = true;
            /* jshint -W117 */
            var userC = _.clone(vm.user);
            /* jshint +W117 */

            dataservice.updateUser(userC).then(function (data) {
                /* jshint -W117 */
                vm.users[_.findIndex(vm.users, {
                    _id: data._id
                })] = data;
                /* jshint +W117 */
                vm.sending = false;
                vm.editMode = false;
                vm.user = {};
            });
        }

    }

})();