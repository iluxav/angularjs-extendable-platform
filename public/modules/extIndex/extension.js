
angular.module("mdlIndexExt", []);

window.extensionRegister.registerExtension("Index", {
    moduleName: "mdlIndexExt",
    templateUrl: '/modules/partialViews/extIndex/index.html',
    controller: 'mdlIndexExt.indexCtrl',
    loadPriority:1
});
