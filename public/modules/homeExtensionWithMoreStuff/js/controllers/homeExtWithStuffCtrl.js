'use strict'

angular.module('modules.homeExtensionWithMoreStuff',[])
    .controller('modules.homeExtensionWithMoreStuff.homeExtWithStuffCtrl',['$scope',function(scope){
        scope.items=['item1','item2','item3'];
    }]);

