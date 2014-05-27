

var moduleName = "modules.homeExtension";
angular.module(moduleName, []);

    window.extensionRegister.registerExtension("HomeMain", {
        moduleName: moduleName,
        templateUrl: '/modules/partialViews/homeExtension/homeExtView.html',
        controller: 'modules.home.homeExtCtrl',
        loadPriority:2
    });
