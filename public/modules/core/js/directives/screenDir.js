
var screenHandlerFunc = ["$route","htmlAppenderFactory", "$http", "$injector", "cacheService",
    function ( route,htmlAppenderFactory, http, injector, cacheService) {
    var getTemplate =function(extension,screen){
        if (extension.templateUrl) {
            var cached=cacheService.get(extension.templateUrl);
            if(cached){
                appendToDOM(cached,screen);
                return;
            }

            $.ajax({
                async: false,
                url: extension.templateUrl,
                success: function (data) {
                    cacheService.set(extension.templateUrl,data);
                    appendToDOM(data,screen);
                }
            });
        }
    };
    var appendToDOM=function(data,screen){
        var element = angular.element(data);
        screen.append(element);
        htmlAppenderFactory.append(screen);
    };
    return {
        restrict: 'E',
        compile: function(e, attr) {
            var screen = angular.element('screen');

            var extRoutes = window.ngExtendPublicRegisterLib[route.current.$$route.screenName] || [];
            for (var t = 0; t < extRoutes.extensions.length; t++) {
               getTemplate(extRoutes.extensions[t],screen);
            }
        },
        link: function(scope, elem, attrs) {
            injector.get('$compile')(elem.children())(scope);
        }
    };
}];

window.modules.coreDev.directive('screen',screenHandlerFunc);

