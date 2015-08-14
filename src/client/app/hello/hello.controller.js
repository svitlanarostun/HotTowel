/**
 * Created by Sveta on 8/6/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.hello')
        .controller('HelloController', HelloController);

    HelloController.$inject = ['$http'];
    /* @ngInject */
    function HelloController($http) {
        var vm = this;
        vm.title = 'Hello';

        vm.orderLookup = function () {
            var url;
            url = 'https://api-stage.simplyactivate.com/SimplyWirelessAPI/affiliateInfo';
            $http.post(url, {orderNo: '9999990240', zipCode: '22031'})
                .success(function(data) {
                    console.log('Success: ' + angular.toJson(data));
                    return data;
                })
                .error(function(error) {
                    console.log('Error: ' + angular.toJson(error));
                    return error;
                });
        };
    }

})();
