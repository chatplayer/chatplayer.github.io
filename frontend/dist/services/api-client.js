'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, _dec, _class, ApiClient;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
        }],
        execute: function () {
            _export('ApiClient', ApiClient = (_dec = inject(HttpClient), _dec(_class = function ApiClient(http) {
                _classCallCheck(this, ApiClient);

                return http.configure(function (config) {
                    config.useStandardConfiguration().withDefaults({
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }).withBaseUrl('http://localhost:3000/').withInterceptor({
                        request: function request(_request) {
                            console.log('Requesting ' + _request.method + ' ' + _request.url);
                            return _request;
                        },
                        response: function response(_response) {
                            console.log('Received ' + _response.status + ' ' + _response.url);
                            return _response;
                        }
                    });
                });
            }) || _class));

            _export('ApiClient', ApiClient);
        }
    };
});
//# sourceMappingURL=api-client.js.map
