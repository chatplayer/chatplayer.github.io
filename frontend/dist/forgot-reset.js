'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'services/api-client', 'aurelia-validation', 'bootstrap-form-renderer'], function (_export, _context) {
  "use strict";

  var inject, bindable, json, ApiClient, ValidationControllerFactory, ValidationController, ValidationRules, BootstrapFormRenderer, _dec, _class, ForgotReset;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaFetchClient) {
      json = _aureliaFetchClient.json;
    }, function (_servicesApiClient) {
      ApiClient = _servicesApiClient.ApiClient;
    }, function (_aureliaValidation) {
      ValidationControllerFactory = _aureliaValidation.ValidationControllerFactory;
      ValidationController = _aureliaValidation.ValidationController;
      ValidationRules = _aureliaValidation.ValidationRules;
    }, function (_bootstrapFormRenderer) {
      BootstrapFormRenderer = _bootstrapFormRenderer.BootstrapFormRenderer;
    }],
    execute: function () {
      _export('ForgotReset', ForgotReset = (_dec = inject(ApiClient, ValidationControllerFactory), _dec(_class = function () {
        function ForgotReset(http, controllerFactory) {
          _classCallCheck(this, ForgotReset);

          this.heading = 'Change your password';
          this.controller = null;
          this.user = {
            reset_password_token: "",
            password: "",
            password_confirmation: ""
          };

          this.http = http;
          this.controller = controllerFactory.createForCurrentScope();
          this.controller.addRenderer(new BootstrapFormRenderer());
        }

        ForgotReset.prototype.activate = function activate(params, routeConfig) {
          var _this = this;

          this.routeConfig = routeConfig;
          this.user.reset_password_token = params.reset_password_token;
          return this.http.fetch('users/password', {
            method: 'put',
            body: json({ user: this.user })
          }).catch(function (error) {
            error.json().then(function (response) {
              if (response.errors.reset_password_token && response.errors.reset_password_token.length > 0) {
                _this.routeConfig.navModel.router.navigate("welcome");
              }
            });
          });
        };

        ForgotReset.prototype.submit = function submit() {
          var _this2 = this;

          this.controller.validate().then(function (errors) {
            if (errors.valid) {
              _this2.forgot();
            }
          });
        };

        ForgotReset.prototype.forgot = function forgot() {
          var _this3 = this;

          return this.http.fetch('users/password', {
            method: 'put',
            body: json({ user: this.user })
          }).then(function (response) {}).catch(function (error) {
            error.json().then(function (response) {
              var errors = response.errors;
              Object.keys(errors).map(function (v) {
                _this3.controller.addError(errors[v], _this3.user, v);
              });
            });
          });
        };

        return ForgotReset;
      }()) || _class));

      _export('ForgotReset', ForgotReset);
    }
  };
});
//# sourceMappingURL=forgot-reset.js.map
