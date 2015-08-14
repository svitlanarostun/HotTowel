/**
 * Created by Sveta on 8/6/2015.
 */
(function() {
    'use strict';

    angular
        .module('app.hello')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
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
})();
