'use strict'

angular.module('modules.homeExtension', [])
    .controller('modules.home.homeExtCtrl', function ($scope) {
        $scope.somevar = "extension";
        $scope.extVar = "ext var ";

        $scope.computedVar = function () {
            return $scope.somevar + " 8888 " + $scope.extVar;
        };

    });

