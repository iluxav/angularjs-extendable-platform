

var moduleName= "index";
angular.module(moduleName, ['ngRoute']);

window.extensionRegister.registerScreen({
    moduleName: moduleName,
    screenName:'Index',
    path:'/',
    templateUrl: '/modules/partialViews/index/index.html',
    controller: 'index.indexCtrl'

});
