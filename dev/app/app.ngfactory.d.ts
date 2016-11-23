/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './app';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
export declare class Wrapper_App {
    _eventHandler: Function;
    context: import0.App;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare const AppNgFactory: import7.ComponentFactory<import0.App>;
export declare class View_App0 extends import1.AppView<import0.App> {
    _text_0: any;
    _el_1: any;
    _text_2: any;
    _el_3: any;
    _text_4: any;
    _el_5: any;
    _text_6: any;
    _el_7: any;
    _text_8: any;
    _text_9: any;
    _text_10: any;
    _el_11: any;
    _text_12: any;
    _el_13: any;
    _RouterLinkWithHref_13_3: import8.Wrapper_RouterLinkWithHref;
    _text_14: any;
    _text_15: any;
    _text_16: any;
    _el_17: any;
    _text_18: any;
    _el_19: any;
    _RouterLinkWithHref_19_3: import8.Wrapper_RouterLinkWithHref;
    _text_20: any;
    _text_21: any;
    _text_22: any;
    _el_23: any;
    _text_24: any;
    _el_25: any;
    _RouterLinkWithHref_25_3: import8.Wrapper_RouterLinkWithHref;
    _text_26: any;
    _text_27: any;
    _text_28: any;
    _el_29: any;
    _text_30: any;
    _el_31: any;
    _RouterLinkWithHref_31_3: import8.Wrapper_RouterLinkWithHref;
    _text_32: any;
    _text_33: any;
    _text_34: any;
    _text_35: any;
    _text_36: any;
    _el_37: any;
    _vc_37: import9.ViewContainer;
    _RouterOutlet_37_5: import10.Wrapper_RouterOutlet;
    _text_38: any;
    _arr_45: any;
    _arr_46: any;
    _arr_47: any;
    _arr_48: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import1.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    handleEvent_13(eventName: string, $event: any): boolean;
    handleEvent_19(eventName: string, $event: any): boolean;
    handleEvent_25(eventName: string, $event: any): boolean;
    handleEvent_31(eventName: string, $event: any): boolean;
}
