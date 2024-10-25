sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zkzsiz/listofemployees/test/integration/FirstJourney',
		'zkzsiz/listofemployees/test/integration/pages/EmployeesList',
		'zkzsiz/listofemployees/test/integration/pages/EmployeesObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeesList, EmployeesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zkzsiz/listofemployees') + '/index.html'
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