// Given a gender, weight, and number of standard drinks consumed over a period of time, 
// this function will calculate your approximate BAC level based on the Widmark Formula
// (You can read more about this here: https://en.wikipedia.org/wiki/Blood_alcohol_content)

function calculateBAC() {
    "use strict";
    var gender = document.getElementById("gender").value;
    var genderConst;
    if (gender === "female") {
        genderConst = 0.55;
    } else if (gender === "male") {
        genderConst = 0.68;
    } else {
        genderConst = 0.62;
    }
    
    var weight = document.getElementById("weight").value * 454;
    var gramsOfAlcohol = document.getElementById("drink_count").value * 14;
    var bac = (gramsOfAlcohol / (weight * genderConst)) * 100;
    bac = bac - (document.getElementById("time_elapsed").value * 0.015);
    alert("Your BAC is: " + bac);
}