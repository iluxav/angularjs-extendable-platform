'use strict'

window.modules.home = angular.module('modules.home',[])
    .controller('modules.home.homeCtrl',['$scope','$route','extendScopeService',function(scope,$route,extendScopeService){
        scope.somevar="vanilla home";
        extendScopeService.extendController($route,scope);
    }]);


