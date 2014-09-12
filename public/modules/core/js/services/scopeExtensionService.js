

window.modules.coreDev.factory('extendScopeService',['$controller', function(controller) {

    var extendController = function ($route,$scope) {
        if(!$route || !$route.current || !$route.current.$$route){
            console.error("'$route' parameter is missing or undefined!");
            return;
        }
        if(!$scope){
            console.error("'$scope' parameter is missing or undefined!");
            return;
        }
        var extRoutes = window.screenRegistry.getExtensionRoutes($route.current.$$route.screenName);
        angular.forEach(extRoutes, function (value, key) {
            if(value.controller) {
                var ctrl = value.controller;
                controller(ctrl, { $scope: $scope });
            }
        });
    };

    return {
        extendController: extendController
    };
}]);