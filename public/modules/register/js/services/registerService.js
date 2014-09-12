window.modules.coreDev
    .factory('registerService', function ($http,$q) {

        var register = function (data) {
            var deferred = $q.defer();

                $http.post('/api/register',{data:data}).success(function (data) {
                    deferred.resolve(data);
                });

            return deferred.promise;
        };
        return {
            register: register
        };
    });
