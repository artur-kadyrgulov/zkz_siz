using { zkz_siz as my } from '../db/schema.cds';

@path : '/service/zkz_sizService'
service zkz_sizService
{
    annotate AssignedClothes with @restrict :
    [
        { grant : [ '*' ], to : [ 'any' ] }
    ];

    annotate Clothes with @restrict :
    [
        { grant : [ '*' ], to : [ 'any' ] }
    ];

    annotate Employees with @restrict :
    [
        { grant : [ '*' ], to : [ 'any' ] }
    ];

    entity Employees as
        projection on my.Employees;

    entity Clothes as
        projection on my.Clothes;

    @odata.draft.enabled
    entity AssignedClothes as
        projection on my.AssignedClothes;
}

annotate zkz_sizService with @requires :
[
    'authenticated-user'
];
