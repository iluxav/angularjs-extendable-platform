window.modules = window.modules || {};
window.ngExtendPublicRegisterLib = {};

window.extendifyConfiguration = (function () {
    var extensionModulesLoadingOrder = {
        'HomeMain':[
            {
                moduleName: 'modules.homeExtension',
                loadPriority:1
            },
            {
                moduleName: 'modules.homeExtensionWithMoreStuff',
                loadPriority:2
            }
        ]
    };

    return {
        extensionModulesLoadingOrder: extensionModulesLoadingOrder
    };
}());
