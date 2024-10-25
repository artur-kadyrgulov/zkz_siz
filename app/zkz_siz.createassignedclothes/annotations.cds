using zkz_sizService as service from '../../srv/service';
annotate service.Employees with {
    FirstName @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Employees',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : FirstName,
                    ValueListProperty : 'FirstName',
                },
            ],
            Label : 'FirstNameSH',
        },
        Common.ValueListWithFixedValues : true
)};

annotate service.Employees with {
    SecondName @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Employees',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : SecondName,
                    ValueListProperty : 'SecondName',
                },
            ],
        },
        Common.ValueListWithFixedValues : true,
        Common.Text : FirstName
)};

