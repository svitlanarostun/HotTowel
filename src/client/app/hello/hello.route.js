/**
 * Created by Sveta on 8/6/2015.
 */
(function() {
    'use strict';

    angular
        .module('app.hello')
//        .run(appRun);

.config(function($stateProvider, $urlRouterProvider) {
     
    $stateProvider
    
        .state('hello', {
            url: '/hello',
            templateUrl: 'app/hello/hello.html',
          controller: 'HelloController',
	  controllerAs: 'vm',
                    title: 'Hello',
                    settings: {
                        nav: 2,
                        content: 'Hello'
                    }
        })
        
        .state('hello.form1', {
            url: '/form1',
            templateUrl: 'app/hello/form-1.html'
        })
        
        .state('hello.form2', {
            url: '/form2',
            templateUrl: 'app/hello/form-2.html'
        });
        
    $urlRouterProvider.otherwise('/hello/form1');
})


/**
    appRun.$inject = ['routerHelper'];
*    /* @ngInject */
/**    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'hello',
                config: {
                    url: '/hello',
                    templateUrl: 'app/hello/hello.html',
                    controller: 'HelloController',
                    controllerAs: 'vm',
                    title: 'Hello',
                    settings: {
                        nav: 2,
                        content: 'Hello'
                    }
                }
            }
        ];
    }
*/



})();
