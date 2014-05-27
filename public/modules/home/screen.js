
var moduleName= "modules.home";

angular.module(moduleName, ['ngRoute']);

window.extensionRegister.registerScreen({
    moduleName: moduleName,
    screenName:'HomeMain',
    path:'/home/main',
    templateUrl: '/modules/partialViews/home/partial1.html',
    controller: 'modules.home.homeCtrl'

});

