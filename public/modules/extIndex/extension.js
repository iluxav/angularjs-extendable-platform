
angular.module("mdlIndexExt", []);

window.extensionRegister.registerExtension("Index", {
    moduleName: "mdlIndexExt",
    templateUrl: 'extIndex/index.html',
    controller: 'mdlIndexExt.indexCtrl',
    loadPriority:1
});
