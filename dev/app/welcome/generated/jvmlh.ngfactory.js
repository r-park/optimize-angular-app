/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core", "./jvmlh"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function View_Jvmlh_0() {
        return import0.ɵviewDef(0, [
            import0.ɵtextDef(null, ['\n    ']),
            import0.ɵelementDef(0, null, null, 1, 'span', [], [
                [
                    0,
                    'aria-label',
                    0
                ],
                [
                    3,
                    'hidden',
                    0
                ]
            ], null, null, null, null),
            import0.ɵtextDef(null, ['This is a dummy component for Jvmlh']),
            import0.ɵtextDef(null, ['\n    ']),
            import0.ɵelementDef(0, null, null, 0, 'div', [], null, [[
                    null,
                    'click'
                ]
            ], function (view, eventName, $event) {
                var allowDefault = true;
                var comp = view.component;
                if (('click' === eventName)) {
                    var pd_0 = (comp.doNothing($event) !== false);
                    allowDefault = (pd_0 && allowDefault);
                }
                return allowDefault;
            }, null, null),
            import0.ɵtextDef(null, ['\n    '])
        ], null, function (check, view) {
            var comp = view.component;
            var currVal_0 = comp.msg;
            var currVal_1 = false;
            check(view, 1, 0, currVal_0, currVal_1);
        });
    }
    exports_1("View_Jvmlh_0", View_Jvmlh_0);
    function View_Jvmlh_Host_0() {
        return import0.ɵviewDef(0, [
            import0.ɵelementDef(0, null, null, 1, 'd-jvmlh', [], null, null, null, View_Jvmlh_0, RenderType_Jvmlh),
            import0.ɵdirectiveDef(1024, null, 0, import1.Jvmlh, [], null, null)
        ], null, null);
    }
    var import0, import1, styles_Jvmlh, RenderType_Jvmlh, RenderType_Jvmlh_Host, JvmlhNgFactory;
    return {
        setters: [
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties}
             */
            /* tslint:disable */
            styles_Jvmlh = [];
            exports_1("RenderType_Jvmlh", RenderType_Jvmlh = import0.ɵcreateRendererTypeV2({
                encapsulation: 2,
                styles: styles_Jvmlh,
                data: { animation: [] }
            }));
            RenderType_Jvmlh_Host = import0.ɵcreateRendererTypeV2({
                encapsulation: 2,
                styles: [],
                data: { animation: [] }
            });
            exports_1("JvmlhNgFactory", JvmlhNgFactory = import0.ɵcreateComponentFactory('d-jvmlh', import1.Jvmlh, View_Jvmlh_Host_0));
        }
    };
});
//# sourceMappingURL=jvmlh.ngfactory.js.map