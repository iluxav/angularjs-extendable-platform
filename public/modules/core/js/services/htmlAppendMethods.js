window.modules.coreDev.factory('htmlAppendMethods', function () {

    var appendTo = function (screen) {
        var componentParts = screen.find("append-to");
        if (componentParts && componentParts.length > 0) {
            for (var i = 0; i < componentParts.length; i++) {
                var el = angular.element(componentParts[i]);
                var componentPartInner = el.children();
                componentPartInner.appendTo(el.attr('el'));
                el.remove();
            }
        }

    };
    var appendAfter = function (screen) {
        var componentParts = screen.find("append-after");
        if (componentParts && componentParts.length > 0) {
            for (var i = 0; i < componentParts.length; i++) {
                var el = angular.element(componentParts[i]);
                var componentPartInner = el.children();
                componentPartInner.insertAfter(el.attr('el'));
                el.remove();
            }
        }
    };
    var appendBefore = function (screen) {
        var componentParts = screen.find("append-before");
        if (componentParts && componentParts.length > 0) {
            for (var i = 0; i < componentParts.length; i++) {
                var el = angular.element(componentParts[i]);
                var componentPartInner = el.children();
                var targetEl = angular.element(el.attr('el'));
                componentPartInner.insertBefore(targetEl);
                el.remove();
            }
        }
    };
    return {
        methods: {
            appendTo: appendTo,
            appendAfter: appendAfter,
            appendBefore: appendBefore
        }
    };
});