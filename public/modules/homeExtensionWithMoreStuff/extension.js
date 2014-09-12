

var moduleName = "modules.homeExtensionWithMoreStuff";
angular.module(moduleName, []);

    window.extensionRegister.registerExtension("HomeMain", {
        moduleName: moduleName,
        templateUrl: 'homeExtensionWithMoreStuff/homeExtWithStuffView.html',
        controller: 'modules.homeExtensionWithMoreStuff.homeExtWithStuffCtrl',
        loadPriority:1
    });
