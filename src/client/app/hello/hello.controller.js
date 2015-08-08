/**
 * Created by Sveta on 8/6/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.hello')
        .controller('HelloController', HelloController);

    HelloController.$inject = ['$http'];

    function HelloController($http) {
        var vm = this;
        vm.title = 'Hello';

        vm.orderLookup = function () {
            $http.post('https://api-stage.simplyactivate.com/SimplyWirelessAPI/affiliateInfo?orderNo=9999990240&zipCode=22031')
                .success(function(data) {
                    console.log('Success');
                    return data;
                })
                .error(function(error) {
                    console.log('Error');
                    return error;
                })
        }
    }

})();
