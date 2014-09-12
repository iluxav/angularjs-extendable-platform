'use strict'

window.modules.coreDev.controller('indexCtrl',['$scope','$route','extendScopeService',
    function(scope,route,extendScopeService){
        scope.someText=''

        scope.printText=function(){
            return 'It comes from indexCtrl - ' + scope.someText;
        };
        //code here
        extendScopeService.extendController(route,scope);
    }]);


