sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zkzsiz/listofclothes/test/integration/FirstJourney',
		'zkzsiz/listofclothes/test/integration/pages/EmployeesList',
		'zkzsiz/listofclothes/test/integration/pages/EmployeesObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeesList, EmployeesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zkzsiz/listofclothes') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeesList: EmployeesList,
					onTheEmployeesObjectPage: EmployeesObjectPage
                }
            },
            opaJourney.run
        );
    }
);