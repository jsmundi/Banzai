import { Template } from 'meteor/templating';
import './gpa-page.html'

Template.GPA_Page.events({
    'change .calculate': function(event){
        console.log('calculating GPA');
        if (document.getElementById) {
            let tbody = document.getElementById("classes_tbody");
            let elements = tbody.getElementsByTagName("input");
            updateCreditsGpaWith(elements);
        } else {
            updateCreditsGpaWith(document.classes.elements);
        }

    },
    'click .addClass': function(event) {
        console.log('adding class');
        if (document.createElement) {
            let tbody = document.getElementById("classes_tbody");
            let newTr = document.createElement("tr");
            for (let i = 0; i < 3; ++i) {
                let td = document.createElement("td");
                let input = document.createElement("input");
                input.size = "15";
                if (i != 0) {
                    input.setAttribute("onchange", "updateCreditsGpa()");
                }
                td.appendChild(input);
                newTr.appendChild(td);
            }
            tbody.appendChild(newTr);
        }
    },
    'click .calculate': function(event){
        console.log('calculating GPA');
        if (document.getElementById) {
            let tbody = document.getElementById("classes_tbody");
            let elements = tbody.getElementsByTagName("input");
            updateCreditsGpaWith(elements);
        } else {
            updateCreditsGpaWith(document.classes.elements);
        }

    }

});
function Invalid() {
    let invalid = -10000
    return invalid;
}
//Return the points corresponding to the given letter
//grade or Invalid if the input is invalid. The grade
//is expected to be capitalized: A, B, etc.
function letterToPoints(grade){
    if ("A+" == grade) {
        return 4.33;
    } else if ("A" == grade) {
        return 4.0;
    } else if ("A-" == grade) {
        return 3.7;
    } else if ("B+" == grade) {
        return 3.33;
    } else if ("B" == grade) {
        return 3.0;
    } else if ("B-" == grade) {
        return 2.7;
    } else if ("C+" == grade) {
        return 2.33;
    } else if ("C" == grade) {
        return 2.0;
    } else if ("C-" == grade) {
        return 1.7;
    } else if ("D+" == grade) {
        return 1.33;
    } else if ("D" == grade) {
        return 1.0;
    } else if ("D-" == grade) {
        return 0.7;
    } else if ("F" == grade) {
        return 0.0;
    } else {
        //XXX! Should we throw an exception here?
        return Invalid();
    }
}




//Convert the given float to a string of the closest
//float with two or fewer places after the decimal.
function formatDecimal(aFloat) {
    let digits = "" + Math.round(100 * aFloat);
    let length = digits.length;
    if (length < 3) {
        return "0." + digits;
    } else {
        let dp = length - 2;
        return digits.substring(0, dp) + "." + digits.substring(dp, length);
    }
}

//Return the char of aString at index.
//If index is invalid, the results are undefined.
function charAt(aString, index) {
    let length = aString.length;
    return aString.substring(index, index + 1);
}

//Convert the given string to a float or return Invalid
//if the given input is not recognized as credit hours.
function toFloatOrInvalid(input) {
    let length = input.length;
    if (length == 0) {
        return Invalid();
    }
    let first = charAt(input, 0);
    if (first == "0") {
        if (length == 1) {
            return 0.0;
        } else if (charAt(input, 1) != ".") {
            return Invalid();
        }
    } else if ("123456789".indexOf(first) == -1) {
        return Invalid;
    }
    let i = 1;
    for (; i < length; ++i) {
        let m = ".0123456789".indexOf(charAt(input, i));
        if (m == -1) {
            return Invalid();
        } else if (m == 0) {
            break;
        }
    }
    for (let j = i + 1; j < length; j++) {
        if ("0123456789".indexOf(charAt(input, j)) == -1) {
            return Invalid();
        }
    }
    return parseFloat(input);
}

function updateCreditsGpaWith(elements) {
    let totalGradedCredits = 0;
    let totalUngradedCredits = 0;
    let totalPoints = 0;

    let haveAtLeastOneGrade = false;

    let length = elements.length;
    for (let i = 0; i < length; i += 3) {
        let letter = elements[i + 2].value.toUpperCase();
        if (letter == "X") {
            continue;
        }

        let creditsString = elements[i + 1].value;
        if (creditsString == "") {
            continue;
        }

        let credits = toFloatOrInvalid(creditsString);
        if (credits == Invalid()) {
            alert('Not a number: "' + creditsString + '"');
            return;
        }

        if (letter == "P" || letter == "T" || letter == "N") {
            totalUngradedCredits += credits;
            continue;
        } else {
            totalGradedCredits += credits;
        }

        if (letter == "") {
            continue;
        }
        let points = letterToPoints(letter);
        if (points == Invalid()) {
            alert('Unrecognized letter grade: "' + letter + '"');
            return;
        }
        haveAtLeastOneGrade = true;

        totalPoints += credits * points;
    }
    document.results.total_credits.value = totalGradedCredits + totalUngradedCredits;
    if (haveAtLeastOneGrade && totalGradedCredits > 0) {
        document.results.gpa.value = formatDecimal(totalPoints / totalGradedCredits);
    } else {
        document.results.gpa.value = "";
    }
}

//Insert the input fields for a new class
//into the table.
function addNewClass(){

}