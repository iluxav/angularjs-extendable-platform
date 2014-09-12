'use strict'

window.modules.coreDev.controller('indexExtCtrl', ['$scope', '$route',
    function (scope, route) {

        scope.someMoreText = '';
        scope.printText = function () {
            return 'Combined with extension - ' + scope.someText + ' + ' + scope.someMoreText;
        };
    }]);


