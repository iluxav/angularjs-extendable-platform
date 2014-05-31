'use strict'

angular.module('index',[]).controller('index.indexCtrl',['$scope','$route','extendScopeService',
    function(scope,route,extendScopeService){

        //code here
        extendScopeService.extendController(route,scope);
    }]);


