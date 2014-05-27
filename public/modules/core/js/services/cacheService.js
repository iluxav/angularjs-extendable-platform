window.modules.coreDev.factory('cacheService', function () {
    var cachedItems = [];
    var get = function (url) {
        var key = stripChars(url);
        return cachedItems[key];
    };
    var set = function (url, value) {
        var key = stripChars(url);
        cachedItems[key] = value;
    };
    var stripChars = function (url) {
        return url.replace(/[^a-zA-Z0-9_]/g, '');
    };
    return {
        get: get,
        set: set
    };
});
