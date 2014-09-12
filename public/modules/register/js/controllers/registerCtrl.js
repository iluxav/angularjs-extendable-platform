'use strict'

window.modules.coreDev.controller('registerCtrl',['$scope','$route','extendScopeService',
    function(scope,route,extendScopeService){

        //code here
        extendScopeService.extendController(route,scope);
    }]);


