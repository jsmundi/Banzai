import { Template } from 'meteor/templating';

Template.Class_Info.helpers({
    getClassName(){
        let name = "Class Name"

      return name;
    },
    getClassDesc(){
        let num = -1;
        let desc = Index(num);

        return desc;
    }

});
function Index(num){
    switch(num){
        case 0:
            return MATH171Desc();
        case 1:
            return CS121Desc();
        case 2:
            return ENGL101Desc();
        case 3:
            return HIST105Desc();

        case 4:
            return MATH172Desc();

        case 5:
            return CS166Desc();

        case 6:
            return CS122Desc();

        case 7:
            return HUMANITIESDesc();

        case 8:
            return MATH220Desc();

        case 9:
            return PHYSICS201Desc();

        case 10:
            return CS260Desc();

        case 11:
            return CS223Desc();

        case 12:
            return ECON101Desc();

        case 13:
            return MATH220Desc();

        case 14:
            return PHYSICS202Desc();

        case 15:
            return CS261Desc();

        case 16:
            return CS224Desc();

        case 17:
            return CS317Desc();

        case 18:
            return CS320Desc();

        case 19:
            return STAT360Desc();

        case 20:
            return ENGLISH402Desc;

        case 21:
            return CS355Desc();

        case 22:
            return CS360Desc();

        case 23:
            return CS351Desc();

        case 24:
            return CS420Desc();

        case 25:
            return CS450Desc();
        case 26:
            return CS421Desc();
        case 27:
            return CS402Desc();
        case 28:
            return CS460Desc();
        default:
            return "Class not listed"
    }


}


//FRESHMAN
//FALL
function CS121Desc(){

    let desc = "";

    return desc;
}
function HIST105Desc(){

    let desc = "";

    return desc;
}
function MATH171Desc(){

    let desc = "";

    return desc;
}
function ENGL101Desc(){

    let desc = "";

    return desc;
}
//FRESHMAN
//SPRING
function MATH172Desc(){

    let desc = "";

    return desc;
}
function CS166Desc(){

    let desc = "";

    return desc;
}
function CS122Desc(){

    let desc = "";

    return desc;
}function HUMANITIESDesc(){

    let desc = "";

    return desc;
}
//SOPHOMORE
//FALL
function MATH273Desc(){

    let desc = "";

    return desc;
}
function CS260Desc(){

    let desc = "";

    return desc;
}
function CS223Desc(){

    let desc = "";

    return desc;
}
function PHYSICS201Desc(){

    let desc = "";

    return desc;
}
function ECON101Desc(){

    let desc = "";

    return desc;
}
//SOPHOMORE
//SPRING
function MATH220Desc(){

    let desc = "";

    return desc;
}
function PHYSICS202Desc(){

    let desc = "";

    return desc;
}
function CS261Desc(){

    let desc = "";

    return desc;
}function CS224Desc(){

    let desc = "";

    return desc;
}
//JUNIOR
//FALL
function CS317Desc(){

    let desc = "";

    return desc;
}
function CS320Desc(){

    let desc = "";

    return desc;
}
function STAT360Desc(){

    let desc = "";

    return desc;
}
function ENGLISH402Desc(){

    let desc = "";

    return desc;
}
//JUNIOR
//SPRING
function CS355Desc(){

    let desc = "";

    return desc;
}
function CS360Desc(){

    let desc = "";

    return desc;
}
function CS351Desc(){

    let desc = "";

    return desc;
}
//SENIOR
//FALL
function CS420Desc(){

    let desc = "";

    return desc;
}
function CS450Desc(){

    let desc = "";

    return desc;
}
//SENIOR
//SPRING

function CS421Desc(){

    let desc = "";

    return desc;
}
function CS402Desc(){

    let desc = "";

    return desc;
}
function CS460Desc(){

    let desc = "";

    return desc;
}