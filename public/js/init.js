'use strict';

var EXTENSIONS = [];

(function (register) {
    //Populates EXTENSION array and sorts all the modules
    register.loadModules(EXTENSIONS);

    angular.module('myApp', EXTENSIONS).config(["$routeProvider", "$interpolateProvider",function (routeProvider, interpolateProvider) {
        //extracts route config from every screen/extension
        register.registerAngularRoutes(routeProvider);
        routeProvider.otherwise({redirectTo: '/'});
        interpolateProvider.startSymbol('{--').endSymbol('--}');
    }]);
}(window.screenRegistry));







