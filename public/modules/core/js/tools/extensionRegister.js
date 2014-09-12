window.extensionRegister = (function (registerLib) {
    var registerScreen = function (route) {
        if (!route) {
            console.error("Please configure route parameters!!!");
            return;
        }
        if (!route.screenName) {
            console.error("Please define screenName property");
        }
        if(route.templateUrl && route.templateUrl.indexOf('modules/partialViews')<0){
            route.templateUrl = '/modules/partialViews/' + route.templateUrl;
        }

        if (!registerLib[route.screenName]) {
            registerLib[route.screenName] = {};
            registerLib[route.screenName].extensions = [];
        }
        registerLib[route.screenName].moduleName = route.moduleName;
        angular.extend(registerLib[route.screenName], route);
    };

    var registerExtension = function (screenName, route) {
        if (!registerLib[screenName]) {
            console.error("Unable to register extension for '" + screenName + "' screen. Base screen does not exists");
            return;
        }
        if(route.templateUrl && route.templateUrl.indexOf('modules/partialViews')<0){
            route.templateUrl = '/modules/partialViews/' + route.templateUrl;
        }
        registerLib[screenName].extensions.push(route);
    };

    var getExtensionRoutes = function (screenName) {

        return registerLib[screenName] ?
            registerLib[screenName].extensions.sort(SortByName) : [];
    };
    var getRouteFor = function (screenName) {
        return registerLib[screenName] ?
            registerLib[screenName].route : {};
    };
    var loadModules = function (EXTENSIONS) {
        angular.forEach(registerLib, function (module, i) {
            EXTENSIONS.push(module.moduleName);
            EXTENSIONS = $.merge(EXTENSIONS, $.map(window.extensionRegister.getExtensionRoutes(module.screenName), function (o) {
                return o.moduleName;
            }));
        });
    };

    var registerAngularRoutes = function ($routeProvider) {
        angular.forEach(registerLib, function (ext) {
            if (ext && ext.path)
                $routeProvider.when(ext.path, ext);
        });
    };

    var SortByName = function (a, b) {
        var aNum = a.loadPriority || 0;
        var bNum = b.loadPriority || 0;
        return ((aNum < bNum) ? -1 : ((aNum > bNum) ? 1 : 0));
    };

    return {
        registerScreen: registerScreen,
        registerExtension: registerExtension,
        getExtensionRoutes: getExtensionRoutes,
        getRouteFor: getRouteFor,
        loadModules: loadModules,
        registerAngularRoutes: registerAngularRoutes
    };
})(window.ngExtendPublicRegisterLib);
