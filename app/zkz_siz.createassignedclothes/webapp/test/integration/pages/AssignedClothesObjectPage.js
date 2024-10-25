sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zkzsiz.createassignedclothes',
            componentId: 'AssignedClothesObjectPage',
            contextPath: '/AssignedClothes'
        },
        CustomPageDefinitions
    );
});