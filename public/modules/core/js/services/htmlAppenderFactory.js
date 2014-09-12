window.modules.coreDev.factory('htmlAppenderFactory', ['htmlAppendMethods',function (htmlAppendMethods) {
    var append = function (screen) {
        var methods = Object.keys(htmlAppendMethods.methods);
        angular.forEach(methods, function (appendMethod) {
            if (typeof htmlAppendMethods.methods[appendMethod] === 'function') {
                htmlAppendMethods.methods[appendMethod](screen);
            }
        });
    };
    return {
        append: append
    };
}]);