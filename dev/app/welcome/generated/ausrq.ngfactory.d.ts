/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './ausrq';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
export declare class Wrapper_Ausrq {
    _eventHandler: Function;
    context: import0.Ausrq;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare const AusrqNgFactory: import7.ComponentFactory<import0.Ausrq>;
export declare class View_Ausrq0 extends import1.AppView<import0.Ausrq> {
    _text_0: any;
    _el_1: any;
    _text_2: any;
    _text_3: any;
    _el_4: any;
    _text_5: any;
    _expr_6: any;
    _expr_7: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import1.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    detectChangesInternal(throwOnChange: boolean): void;
    handleEvent_4(eventName: string, $event: any): boolean;
}
