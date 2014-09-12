

    window.modules.coreDev = angular.module("core", []);
    window.extensionRegister.registerScreen( {
        moduleName: 'core',
        screenName:"CoreDev",
        loadPriority:2
    });
