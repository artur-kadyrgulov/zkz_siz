sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zkzsiz/listofassignedclothes/test/integration/FirstJourney',
		'zkzsiz/listofassignedclothes/test/integration/pages/AssignedClothesList',
		'zkzsiz/listofassignedclothes/test/integration/pages/AssignedClothesObjectPage'
    ],
    function(JourneyRunner, opaJourney, AssignedClothesList, AssignedClothesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zkzsiz/listofassignedclothes') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAssignedClothesList: AssignedClothesList,
					onTheAssignedClothesObjectPage: AssignedClothesObjectPage
                }
            },
            opaJourney.run
        );
    }
);