/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(["@angular/core", "./uqrlh"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function View_Uqrlh_0() {
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
            import0.ɵtextDef(null, ['This is a dummy component for Uqrlh']),
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
    exports_1("View_Uqrlh_0", View_Uqrlh_0);
    function View_Uqrlh_Host_0() {
        return import0.ɵviewDef(0, [
            import0.ɵelementDef(0, null, null, 1, 'd-uqrlh', [], null, null, null, View_Uqrlh_0, RenderType_Uqrlh),
            import0.ɵdirectiveDef(1024, null, 0, import1.Uqrlh, [], null, null)
        ], null, null);
    }
    var import0, import1, styles_Uqrlh, RenderType_Uqrlh, RenderType_Uqrlh_Host, UqrlhNgFactory;
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
            styles_Uqrlh = [];
            exports_1("RenderType_Uqrlh", RenderType_Uqrlh = import0.ɵcreateRendererTypeV2({
                encapsulation: 2,
                styles: styles_Uqrlh,
                data: { animation: [] }
            }));
            RenderType_Uqrlh_Host = import0.ɵcreateRendererTypeV2({
                encapsulation: 2,
                styles: [],
                data: { animation: [] }
            });
            exports_1("UqrlhNgFactory", UqrlhNgFactory = import0.ɵcreateComponentFactory('d-uqrlh', import1.Uqrlh, View_Uqrlh_Host_0));
        }
    };
});
//# sourceMappingURL=uqrlh.ngfactory.js.map