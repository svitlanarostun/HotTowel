/**
 * Created by Sveta on 8/6/2015.
 */
(function () {
    'use strict';

    angular
        .module('app.hello')
        .controller('HelloController',  function($scope) {
    
    $scope.formData = {};
    
    $scope.processForm = function() {
        alert('awesome!');
    };
    
});


//HelloController);

/**    HelloController.$inject = ['$http', '$scope'];
    /* @ngInject */
/**    function HelloController($http, $scope) {
   
	var vm = this;
        vm.title = 'Hello';

	this.user = {
             name: '',
             email: ''
        };

	this.register = function() {
            console.log('User clicked register', this.user);
	};

    $scope.formData = {};
    
    $scope.processForm = function() {
        alert('awesome!');  
};   


$scope.activeState = [true, false];

$scope.nextSlide = function () {
  var activeIndex = $scope.activeState.indexOf(true);
  if (activeIndex >= $scope.activeState.length - 1) {
    return; // already reached the last slide
  }

  $scope.activeState[activeIndex] = false;
  $scope.activeState[activeIndex + 1] = true;
};  

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
*/

})();
