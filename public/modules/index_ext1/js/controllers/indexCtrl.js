'use strict'

angular.module('indexExt1', []).controller('indexExtCtrl', ['$scope', '$route',
    function (scope, route) {

        scope.someMoreText = '';
        scope.printText = function () {
            return 'Combined with extension - ' + scope.someText + ' + ' + scope.someMoreText;
        };
    }]);


