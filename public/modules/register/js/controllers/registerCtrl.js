'use strict'

window.modules.coreDev.controller('registerCtrl', ['$scope', '$route', 'extendScopeService', 'registerService',
    function (scope, route, extendScopeService, registerService) {
        scope.formData = {};
        scope.serverResponse='';
        scope.submit = function () {
            if (scope.userForm.$valid) {
                registerService.register(scope.formData).then(function (data) {
                    scope.serverResponse = data;
                });
            }
        };

        //code here
        extendScopeService.extendController(route, scope);
    }]);


