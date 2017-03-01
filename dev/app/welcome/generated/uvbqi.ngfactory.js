/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core", "./uvbqi"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function View_Uvbqi_0() {
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
            import0.ɵtextDef(null, ['This is a dummy component for Uvbqi']),
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
    exports_1("View_Uvbqi_0", View_Uvbqi_0);
    function View_Uvbqi_Host_0() {
        return import0.ɵviewDef(0, [
            import0.ɵelementDef(0, null, null, 1, 'd-uvbqi', [], null, null, null, View_Uvbqi_0, RenderType_Uvbqi),
            import0.ɵdirectiveDef(1024, null, 0, import1.Uvbqi, [], null, null)
        ], null, null);
    }
    var import0, import1, styles_Uvbqi, RenderType_Uvbqi, RenderType_Uvbqi_Host, UvbqiNgFactory;
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
            styles_Uvbqi = [];
            exports_1("RenderType_Uvbqi", RenderType_Uvbqi = import0.ɵcreateRendererTypeV2({
                encapsulation: 2,
                styles: styles_Uvbqi,
                data: { animation: [] }
            }));
            RenderType_Uvbqi_Host = import0.ɵcreateRendererTypeV2({
                encapsulation: 2,
                styles: [],
                data: { animation: [] }
            });
            exports_1("UvbqiNgFactory", UvbqiNgFactory = import0.ɵcreateComponentFactory('d-uvbqi', import1.Uvbqi, View_Uvbqi_Host_0));
        }
    };
});
//# sourceMappingURL=uvbqi.ngfactory.js.map