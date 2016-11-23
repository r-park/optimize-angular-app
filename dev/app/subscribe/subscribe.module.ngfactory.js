/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(['@angular/core/src/linker/ng_module_factory', './subscribe.module', '@angular/forms/src/directives', '@angular/forms/src/form_providers', '@angular/router/src/router_module', '@angular/forms/src/directives/radio_control_value_accessor', './subscribe.ngfactory', './subscribe', '@angular/router/src/router_config_loader'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import2, import3, import4, import5, import7, import8, import9;
    var SubscribeModuleInjector, SubscribeModuleNgFactory;
    return {
        setters:[
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import2_1) {
                import2 = import2_1;
            },
            function (import3_1) {
                import3 = import3_1;
            },
            function (import4_1) {
                import4 = import4_1;
            },
            function (import5_1) {
                import5 = import5_1;
            },
            function (import7_1) {
                import7 = import7_1;
            },
            function (import8_1) {
                import8 = import8_1;
            },
            function (import9_1) {
                import9 = import9_1;
            }],
        execute: function() {
            SubscribeModuleInjector = (function (_super) {
                __extends(SubscribeModuleInjector, _super);
                function SubscribeModuleInjector(parent) {
                    _super.call(this, parent, [import7.SubscribeNgFactory], []);
                }
                Object.defineProperty(SubscribeModuleInjector.prototype, "_RadioControlRegistry_4", {
                    get: function () {
                        if ((this.__RadioControlRegistry_4 == null)) {
                            (this.__RadioControlRegistry_4 = new import5.RadioControlRegistry());
                        }
                        return this.__RadioControlRegistry_4;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SubscribeModuleInjector.prototype, "_ROUTES_5", {
                    get: function () {
                        if ((this.__ROUTES_5 == null)) {
                            (this.__ROUTES_5 = [[{
                                        path: '',
                                        component: import8.Subscribe
                                    }
                                ]]);
                        }
                        return this.__ROUTES_5;
                    },
                    enumerable: true,
                    configurable: true
                });
                SubscribeModuleInjector.prototype.createInternal = function () {
                    this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
                    this._FormsModule_1 = new import3.FormsModule();
                    this._RouterModule_2 = new import4.RouterModule(this.parent.get(import4.ROUTER_FORROOT_GUARD, null));
                    this._SubscribeModule_3 = new import1.SubscribeModule();
                    return this._SubscribeModule_3;
                };
                SubscribeModuleInjector.prototype.getInternal = function (token, notFoundResult) {
                    if ((token === import2.InternalFormsSharedModule)) {
                        return this._InternalFormsSharedModule_0;
                    }
                    if ((token === import3.FormsModule)) {
                        return this._FormsModule_1;
                    }
                    if ((token === import4.RouterModule)) {
                        return this._RouterModule_2;
                    }
                    if ((token === import1.SubscribeModule)) {
                        return this._SubscribeModule_3;
                    }
                    if ((token === import5.RadioControlRegistry)) {
                        return this._RadioControlRegistry_4;
                    }
                    if ((token === import9.ROUTES)) {
                        return this._ROUTES_5;
                    }
                    return notFoundResult;
                };
                SubscribeModuleInjector.prototype.destroyInternal = function () {
                };
                return SubscribeModuleInjector;
            }(import0.NgModuleInjector));
            exports_1("SubscribeModuleNgFactory", SubscribeModuleNgFactory = new import0.NgModuleFactory(SubscribeModuleInjector, import1.SubscribeModule));
        }
    }
});
//# sourceMappingURL=subscribe.module.ngfactory.js.map