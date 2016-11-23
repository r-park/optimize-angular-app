/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(['./subscribe', '@angular/core/src/linker/view', '@angular/core/src/linker/view_utils', '@angular/core/src/metadata/view', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/change_detection', '@angular/core/src/linker/component_factory', '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory', '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory', '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory', '@angular/core/src/linker/element_ref', '@angular/forms/src/directives/default_value_accessor', '@angular/forms/src/directives/control_value_accessor', '@angular/forms/src/directives/ng_model', '@angular/forms/src/directives/ng_control', '@angular/forms/src/directives/ng_control_status'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import3, import4, import5, import6, import7, import8, import9, import10, import11, import12, import13, import14, import15, import16;
    var Wrapper_Subscribe, renderType_Subscribe_Host, View_Subscribe_Host0, SubscribeNgFactory, styles_Subscribe, renderType_Subscribe, View_Subscribe0;
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
            }],
        execute: function() {
            Wrapper_Subscribe = (function () {
                function Wrapper_Subscribe() {
                    this._changed = false;
                    this.context = new import0.Subscribe();
                }
                Wrapper_Subscribe.prototype.ngOnDetach = function (view, componentView, el) {
                };
                Wrapper_Subscribe.prototype.ngOnDestroy = function () {
                };
                Wrapper_Subscribe.prototype.ngDoCheck = function (view, el, throwOnChange) {
                    var changed = this._changed;
                    this._changed = false;
                    return changed;
                };
                Wrapper_Subscribe.prototype.checkHost = function (view, componentView, el, throwOnChange) {
                };
                Wrapper_Subscribe.prototype.handleEvent = function (eventName, $event) {
                    var result = true;
                    return result;
                };
                Wrapper_Subscribe.prototype.subscribe = function (view, _eventHandler) {
                    this._eventHandler = _eventHandler;
                };
                return Wrapper_Subscribe;
            }());
            exports_1("Wrapper_Subscribe", Wrapper_Subscribe);
            renderType_Subscribe_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
            View_Subscribe_Host0 = (function (_super) {
                __extends(View_Subscribe_Host0, _super);
                function View_Subscribe_Host0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Subscribe_Host0, renderType_Subscribe_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                }
                View_Subscribe_Host0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'subscribe', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
                    this.compView_0 = new View_Subscribe0(this.viewUtils, this, 0, this._el_0);
                    this._Subscribe_0_3 = new Wrapper_Subscribe();
                    this.compView_0.create(this._Subscribe_0_3.context);
                    this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
                    return new import7.ComponentRef_(0, this, this._el_0, this._Subscribe_0_3.context);
                };
                View_Subscribe_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import0.Subscribe) && (0 === requestNodeIndex))) {
                        return this._Subscribe_0_3.context;
                    }
                    return notFoundResult;
                };
                View_Subscribe_Host0.prototype.detectChangesInternal = function (throwOnChange) {
                    this._Subscribe_0_3.ngDoCheck(this, this._el_0, throwOnChange);
                    this.compView_0.detectChanges(throwOnChange);
                };
                View_Subscribe_Host0.prototype.destroyInternal = function () {
                    this.compView_0.destroy();
                };
                View_Subscribe_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
                    cb(this._el_0, ctx);
                };
                return View_Subscribe_Host0;
            }(import1.AppView));
            exports_1("SubscribeNgFactory", SubscribeNgFactory = new import7.ComponentFactory('subscribe', View_Subscribe_Host0, import0.Subscribe));
            styles_Subscribe = [];
            renderType_Subscribe = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Subscribe, {});
            View_Subscribe0 = (function (_super) {
                __extends(View_Subscribe0, _super);
                function View_Subscribe0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Subscribe0, renderType_Subscribe, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                    this._expr_19 = import6.UNINITIALIZED;
                }
                View_Subscribe0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
                    this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'h2', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_4 = this.renderer.createText(this._el_3, 'Subscribe', null);
                    this._text_5 = this.renderer.createText(this._el_1, '\n      Please enter your email address:', null);
                    this._el_6 = import3.createRenderElement(this.renderer, this._el_1, 'br', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_7 = this.renderer.createText(this._el_1, '\n      ', null);
                    this._el_8 = import3.createRenderElement(this.renderer, this._el_1, 'input', import3.EMPTY_INLINE_ARRAY, null);
                    this._DefaultValueAccessor_8_3 = new import8.Wrapper_DefaultValueAccessor(this.renderer, new import11.ElementRef(this._el_8));
                    this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3.context];
                    this._NgModel_8_5 = new import9.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_8_4);
                    this._NgControl_8_6 = this._NgModel_8_5.context;
                    this._NgControlStatus_8_7 = new import10.Wrapper_NgControlStatus(this._NgControl_8_6);
                    this._text_9 = this.renderer.createText(this._el_1, '\n      ', null);
                    this._el_10 = import3.createRenderElement(this.renderer, this._el_1, 'pre', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_11 = this.renderer.createText(this._el_10, '', null);
                    this._text_12 = this.renderer.createText(this._el_1, '\n    ', null);
                    this._text_13 = this.renderer.createText(parentRenderNode, '\n  ', null);
                    var disposable_0 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_8));
                    this._NgModel_8_5.subscribe(this, this.eventHandler(this.handleEvent_8), true);
                    this.init(null, (this.renderer.directRenderer ? null : [
                        this._text_0,
                        this._el_1,
                        this._text_2,
                        this._el_3,
                        this._text_4,
                        this._text_5,
                        this._el_6,
                        this._text_7,
                        this._el_8,
                        this._text_9,
                        this._el_10,
                        this._text_11,
                        this._text_12,
                        this._text_13
                    ]), [disposable_0]);
                    return null;
                };
                View_Subscribe0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import12.DefaultValueAccessor) && (8 === requestNodeIndex))) {
                        return this._DefaultValueAccessor_8_3.context;
                    }
                    if (((token === import13.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) {
                        return this._NG_VALUE_ACCESSOR_8_4;
                    }
                    if (((token === import14.NgModel) && (8 === requestNodeIndex))) {
                        return this._NgModel_8_5.context;
                    }
                    if (((token === import15.NgControl) && (8 === requestNodeIndex))) {
                        return this._NgControl_8_6;
                    }
                    if (((token === import16.NgControlStatus) && (8 === requestNodeIndex))) {
                        return this._NgControlStatus_8_7.context;
                    }
                    return notFoundResult;
                };
                View_Subscribe0.prototype.detectChangesInternal = function (throwOnChange) {
                    this._DefaultValueAccessor_8_3.ngDoCheck(this, this._el_8, throwOnChange);
                    var currVal_8_1_0 = this.context.address;
                    this._NgModel_8_5.check_model(currVal_8_1_0, throwOnChange, false);
                    this._NgModel_8_5.ngDoCheck(this, this._el_8, throwOnChange);
                    this._NgControlStatus_8_7.ngDoCheck(this, this._el_8, throwOnChange);
                    this._NgControlStatus_8_7.checkHost(this, this, this._el_8, throwOnChange);
                    var currVal_19 = import3.inlineInterpolate(1, 'Value entered: ', this.context.address, '');
                    if (import3.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
                        this.renderer.setText(this._text_11, currVal_19);
                        this._expr_19 = currVal_19;
                    }
                };
                View_Subscribe0.prototype.destroyInternal = function () {
                    this._NgModel_8_5.ngOnDestroy();
                };
                View_Subscribe0.prototype.handleEvent_8 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    result = (this._DefaultValueAccessor_8_3.handleEvent(eventName, $event) && result);
                    if ((eventName == 'ngModelChange')) {
                        var pd_sub_0 = ((this.context.address = $event) !== false);
                        result = (pd_sub_0 && result);
                    }
                    return result;
                };
                return View_Subscribe0;
            }(import1.AppView));
            exports_1("View_Subscribe0", View_Subscribe0);
        }
    }
});
//# sourceMappingURL=subscribe.ngfactory.js.map