using zkz_sizService as service from '../../srv/service';
annotate service.Employees with {
    FirstName @UI.MultiLineText : true
};

annotate service.Employees with {
    SecondName @UI.MultiLineText : true
};

