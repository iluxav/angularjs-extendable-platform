angular.module('indexExt1',[]);
window.extensionRegister.registerExtension("Index", {
    moduleName: "indexExt1",
    templateUrl: 'index_ext1/index.html',
    controller: 'indexExtCtrl',
    loadPriority:1
});