/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(['./app', '@angular/core/src/linker/view', '@angular/core/src/linker/view_utils', '@angular/core/src/metadata/view', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/change_detection', '@angular/core/src/linker/component_factory', '../node_modules/@angular/router/src/directives/router_link.ngfactory', '@angular/core/src/linker/view_container', '../node_modules/@angular/router/src/directives/router_outlet.ngfactory', '@angular/router/src/router', '@angular/router/src/router_state', '@angular/common/src/location/location_strategy', '@angular/router/src/router_outlet_map', '@angular/core/src/linker/component_factory_resolver', '@angular/router/src/directives/router_link', '@angular/router/src/directives/router_outlet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import3, import4, import5, import6, import7, import8, import9, import10, import11, import12, import13, import14, import15, import16, import17;
    var Wrapper_App, renderType_App_Host, View_App_Host0, AppNgFactory, styles_App, renderType_App, View_App0;
    return {
        setters:[
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
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
            function (import6_1) {
                import6 = import6_1;
            },
            function (import7_1) {
                import7 = import7_1;
            },
            function (import8_1) {
                import8 = import8_1;
            },
            function (import9_1) {
                import9 = import9_1;
            },
            function (import10_1) {
                import10 = import10_1;
            },
            function (import11_1) {
                import11 = import11_1;
            },
            function (import12_1) {
                import12 = import12_1;
            },
            function (import13_1) {
                import13 = import13_1;
            },
            function (import14_1) {
                import14 = import14_1;
            },
            function (import15_1) {
                import15 = import15_1;
            },
            function (import16_1) {
                import16 = import16_1;
            },
            function (import17_1) {
                import17 = import17_1;
            }],
        execute: function() {
            Wrapper_App = (function () {
                function Wrapper_App() {
                    this._changed = false;
                    this.context = new import0.App();
                }
                Wrapper_App.prototype.ngOnDetach = function (view, componentView, el) {
                };
                Wrapper_App.prototype.ngOnDestroy = function () {
                };
                Wrapper_App.prototype.ngDoCheck = function (view, el, throwOnChange) {
                    var changed = this._changed;
                    this._changed = false;
                    return changed;
                };
                Wrapper_App.prototype.checkHost = function (view, componentView, el, throwOnChange) {
                };
                Wrapper_App.prototype.handleEvent = function (eventName, $event) {
                    var result = true;
                    return result;
                };
                Wrapper_App.prototype.subscribe = function (view, _eventHandler) {
                    this._eventHandler = _eventHandler;
                };
                return Wrapper_App;
            }());
            exports_1("Wrapper_App", Wrapper_App);
            renderType_App_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
            View_App_Host0 = (function (_super) {
                __extends(View_App_Host0, _super);
                function View_App_Host0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_App_Host0, renderType_App_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                }
                View_App_Host0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'my-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
                    this.compView_0 = new View_App0(this.viewUtils, this, 0, this._el_0);
                    this._App_0_3 = new Wrapper_App();
                    this.compView_0.create(this._App_0_3.context);
                    this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
                    return new import7.ComponentRef_(0, this, this._el_0, this._App_0_3.context);
                };
                View_App_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import0.App) && (0 === requestNodeIndex))) {
                        return this._App_0_3.context;
                    }
                    return notFoundResult;
                };
                View_App_Host0.prototype.detectChangesInternal = function (throwOnChange) {
                    this._App_0_3.ngDoCheck(this, this._el_0, throwOnChange);
                    this.compView_0.detectChanges(throwOnChange);
                };
                View_App_Host0.prototype.destroyInternal = function () {
                    this.compView_0.destroy();
                };
                View_App_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
                    cb(this._el_0, ctx);
                };
                return View_App_Host0;
            }(import1.AppView));
            exports_1("AppNgFactory", AppNgFactory = new import7.ComponentFactory('my-app', View_App_Host0, import0.App));
            styles_App = [];
            renderType_App = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_App, {});
            View_App0 = (function (_super) {
                __extends(View_App0, _super);
                function View_App0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_App0, renderType_App, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                    this._arr_45 = import3.pureProxy1(function (p0) {
                        return [p0];
                    });
                    this._arr_46 = import3.pureProxy1(function (p0) {
                        return [p0];
                    });
                    this._arr_47 = import3.pureProxy1(function (p0) {
                        return [p0];
                    });
                    this._arr_48 = import3.pureProxy1(function (p0) {
                        return [p0];
                    });
                }
                View_App0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
                    this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'nav', new import3.InlineArray2(2, 'class', 'navbar navbar-dark bg-primary'), null);
                    this._text_2 = this.renderer.createText(this._el_1, '\n  ', null);
                    this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav'), null);
                    this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
                    this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'li', new import3.InlineArray2(2, 'class', 'nav-item'), null);
                    this._text_6 = this.renderer.createText(this._el_5, '\n      ', null);
                    this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'a', new import3.InlineArray4(4, 'class', 'navbar-brand', 'href', '..'), null);
                    this._text_8 = this.renderer.createText(this._el_7, '⇦', null);
                    this._text_9 = this.renderer.createText(this._el_5, '\n    ', null);
                    this._text_10 = this.renderer.createText(this._el_3, '\n    ', null);
                    this._el_11 = import3.createRenderElement(this.renderer, this._el_3, 'li', new import3.InlineArray2(2, 'class', 'nav-item active'), null);
                    this._text_12 = this.renderer.createText(this._el_11, '\n      ', null);
                    this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'a', new import3.InlineArray2(2, 'class', 'nav-link'), null);
                    this._RouterLinkWithHref_13_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import11.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import13.LocationStrategy, this.parentIndex));
                    this._text_14 = this.renderer.createText(this._el_13, 'Home', null);
                    this._text_15 = this.renderer.createText(this._el_11, '\n    ', null);
                    this._text_16 = this.renderer.createText(this._el_3, '\n    ', null);
                    this._el_17 = import3.createRenderElement(this.renderer, this._el_3, 'li', new import3.InlineArray2(2, 'class', 'nav-item'), null);
                    this._text_18 = this.renderer.createText(this._el_17, '\n      ', null);
                    this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'a', new import3.InlineArray2(2, 'class', 'nav-link'), null);
                    this._RouterLinkWithHref_19_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import11.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import13.LocationStrategy, this.parentIndex));
                    this._text_20 = this.renderer.createText(this._el_19, 'List', null);
                    this._text_21 = this.renderer.createText(this._el_17, '\n    ', null);
                    this._text_22 = this.renderer.createText(this._el_3, '\n    ', null);
                    this._el_23 = import3.createRenderElement(this.renderer, this._el_3, 'li', new import3.InlineArray2(2, 'class', 'nav-item'), null);
                    this._text_24 = this.renderer.createText(this._el_23, '\n      ', null);
                    this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'a', new import3.InlineArray2(2, 'class', 'nav-link'), null);
                    this._RouterLinkWithHref_25_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import11.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import13.LocationStrategy, this.parentIndex));
                    this._text_26 = this.renderer.createText(this._el_25, 'Subscribe', null);
                    this._text_27 = this.renderer.createText(this._el_23, '\n    ', null);
                    this._text_28 = this.renderer.createText(this._el_3, '\n    ', null);
                    this._el_29 = import3.createRenderElement(this.renderer, this._el_3, 'li', new import3.InlineArray2(2, 'class', 'nav-item'), null);
                    this._text_30 = this.renderer.createText(this._el_29, '\n      ', null);
                    this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'a', new import3.InlineArray2(2, 'class', 'nav-link'), null);
                    this._RouterLinkWithHref_31_3 = new import8.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import11.Router, this.parentIndex), this.parentView.injectorGet(import12.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import13.LocationStrategy, this.parentIndex));
                    this._text_32 = this.renderer.createText(this._el_31, 'Search', null);
                    this._text_33 = this.renderer.createText(this._el_29, '\n    ', null);
                    this._text_34 = this.renderer.createText(this._el_3, '\n  ', null);
                    this._text_35 = this.renderer.createText(this._el_1, '\n', null);
                    this._text_36 = this.renderer.createText(parentRenderNode, '\n', null);
                    this._el_37 = import3.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
                    this._vc_37 = new import9.ViewContainer(37, null, this, this._el_37);
                    this._RouterOutlet_37_5 = new import10.Wrapper_RouterOutlet(this.parentView.injectorGet(import14.RouterOutletMap, this.parentIndex), this._vc_37.vcRef, this.parentView.injectorGet(import15.ComponentFactoryResolver, this.parentIndex), null);
                    this._text_38 = this.renderer.createText(parentRenderNode, '\n  ', null);
                    var disposable_0 = import3.subscribeToRenderElement(this, this._el_13, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_13));
                    var disposable_1 = import3.subscribeToRenderElement(this, this._el_19, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_19));
                    var disposable_2 = import3.subscribeToRenderElement(this, this._el_25, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_25));
                    var disposable_3 = import3.subscribeToRenderElement(this, this._el_31, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_31));
                    this.init(null, (this.renderer.directRenderer ? null : [
                        this._text_0,
                        this._el_1,
                        this._text_2,
                        this._el_3,
                        this._text_4,
                        this._el_5,
                        this._text_6,
                        this._el_7,
                        this._text_8,
                        this._text_9,
                        this._text_10,
                        this._el_11,
                        this._text_12,
                        this._el_13,
                        this._text_14,
                        this._text_15,
                        this._text_16,
                        this._el_17,
                        this._text_18,
                        this._el_19,
                        this._text_20,
                        this._text_21,
                        this._text_22,
                        this._el_23,
                        this._text_24,
                        this._el_25,
                        this._text_26,
                        this._text_27,
                        this._text_28,
                        this._el_29,
                        this._text_30,
                        this._el_31,
                        this._text_32,
                        this._text_33,
                        this._text_34,
                        this._text_35,
                        this._text_36,
                        this._el_37,
                        this._text_38
                    ]), [
                        disposable_0,
                        disposable_1,
                        disposable_2,
                        disposable_3
                    ]);
                    return null;
                };
                View_App0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import16.RouterLinkWithHref) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
                        return this._RouterLinkWithHref_13_3.context;
                    }
                    if (((token === import16.RouterLinkWithHref) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
                        return this._RouterLinkWithHref_19_3.context;
                    }
                    if (((token === import16.RouterLinkWithHref) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
                        return this._RouterLinkWithHref_25_3.context;
                    }
                    if (((token === import16.RouterLinkWithHref) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
                        return this._RouterLinkWithHref_31_3.context;
                    }
                    if (((token === import17.RouterOutlet) && (37 === requestNodeIndex))) {
                        return this._RouterOutlet_37_5.context;
                    }
                    return notFoundResult;
                };
                View_App0.prototype.detectChangesInternal = function (throwOnChange) {
                    var currVal_13_0_0 = this._arr_45('/');
                    this._RouterLinkWithHref_13_3.check_routerLink(currVal_13_0_0, throwOnChange, false);
                    this._RouterLinkWithHref_13_3.ngDoCheck(this, this._el_13, throwOnChange);
                    var currVal_19_0_0 = this._arr_46('/list');
                    this._RouterLinkWithHref_19_3.check_routerLink(currVal_19_0_0, throwOnChange, false);
                    this._RouterLinkWithHref_19_3.ngDoCheck(this, this._el_19, throwOnChange);
                    var currVal_25_0_0 = this._arr_47('/subscribe');
                    this._RouterLinkWithHref_25_3.check_routerLink(currVal_25_0_0, throwOnChange, false);
                    this._RouterLinkWithHref_25_3.ngDoCheck(this, this._el_25, throwOnChange);
                    var currVal_31_0_0 = this._arr_48('/search');
                    this._RouterLinkWithHref_31_3.check_routerLink(currVal_31_0_0, throwOnChange, false);
                    this._RouterLinkWithHref_31_3.ngDoCheck(this, this._el_31, throwOnChange);
                    this._RouterOutlet_37_5.ngDoCheck(this, this._el_37, throwOnChange);
                    this._vc_37.detectChangesInNestedViews(throwOnChange);
                    this._RouterLinkWithHref_13_3.checkHost(this, this, this._el_13, throwOnChange);
                    this._RouterLinkWithHref_19_3.checkHost(this, this, this._el_19, throwOnChange);
                    this._RouterLinkWithHref_25_3.checkHost(this, this, this._el_25, throwOnChange);
                    this._RouterLinkWithHref_31_3.checkHost(this, this, this._el_31, throwOnChange);
                };
                View_App0.prototype.destroyInternal = function () {
                    this._vc_37.destroyNestedViews();
                    this._RouterLinkWithHref_13_3.ngOnDestroy();
                    this._RouterLinkWithHref_19_3.ngOnDestroy();
                    this._RouterLinkWithHref_25_3.ngOnDestroy();
                    this._RouterLinkWithHref_31_3.ngOnDestroy();
                    this._RouterOutlet_37_5.ngOnDestroy();
                };
                View_App0.prototype.handleEvent_13 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    result = (this._RouterLinkWithHref_13_3.handleEvent(eventName, $event) && result);
                    return result;
                };
                View_App0.prototype.handleEvent_19 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    result = (this._RouterLinkWithHref_19_3.handleEvent(eventName, $event) && result);
                    return result;
                };
                View_App0.prototype.handleEvent_25 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    result = (this._RouterLinkWithHref_25_3.handleEvent(eventName, $event) && result);
                    return result;
                };
                View_App0.prototype.handleEvent_31 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    result = (this._RouterLinkWithHref_31_3.handleEvent(eventName, $event) && result);
                    return result;
                };
                return View_App0;
            }(import1.AppView));
            exports_1("View_App0", View_App0);
        }
    }
});
//# sourceMappingURL=app.ngfactory.js.map