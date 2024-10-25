using zkz_sizService as service from '../../srv/service';
annotate service.AssignedClothes with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : employees.FirstName,
                Label : 'FirstName',
            },
            {
                $Type : 'UI.DataField',
                Value : employees.SecondName,
                Label : 'SecondName',
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'clothes',
            ID : 'clothes',
            Target : 'clothes/@UI.LineItem#clothes',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : clothes.Name,
            Label : 'Name',
        },
        {
            $Type : 'UI.DataField',
            Value : employees.FirstName,
            Label : 'FirstName',
        },
        {
            $Type : 'UI.DataField',
            Value : employees.SecondName,
            Label : 'SecondName',
        },
    ],
);

annotate service.Clothes with @(
    UI.LineItem #clothes : [
        {
            $Type : 'UI.DataField',
            Value : assignedClothes.clothes.Name,
            Label : 'Name',
        },
    ]
);

annotate service.Clothes with {
    Name @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Clothes',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : Name,
                    ValueListProperty : 'Name',
                },
            ],
            Label : 'ClothesValueHelp',
        },
        Common.ValueListWithFixedValues : true
)};

