'use strict'

angular.module('index',[]).controller('index.indexCtrl',function($scope,$route,extendScopeService){

        //code here
        extendScopeService.extendController($route,$scope);
    });


