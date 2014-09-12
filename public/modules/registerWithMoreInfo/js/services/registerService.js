window.modules.coreDev
    .factory('registerService', function ($http,$q) {

        var register = function (data) {
            var deferred = $q.defer();
            data.hacked='This field came from extension!';
            deferred.resolve(data);

            return deferred.promise;
        };
        return {
            register: register
        };
    });
