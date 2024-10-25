sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zkzsiz/createassignedclothes/test/integration/FirstJourney',
		'zkzsiz/createassignedclothes/test/integration/pages/AssignedClothesObjectPage'
    ],
    function(JourneyRunner, opaJourney, AssignedClothesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zkzsiz/createassignedclothes') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAssignedClothesObjectPage: AssignedClothesObjectPage
                }
            },
            opaJourney.run
        );
    }
);