$(document).ready(function () {
//set variables
var tax;
var take_home;
//function to calulate take home pay.
var tax_takehome_func = function (value) {
    if  (value <= 9075) {
        tax = (((value) * 10) / 100);
        take_home = (value - tax);
    }
    else if (value >= 9076 && value <= 36900) {
        tax = (((value) * 15) / 100);
        take_home = (value - tax);
    }
    else if (value >= 36901 && value <= 89350) {
        tax = (((value)* 25) / 100);
        take_home = (value - tax);
    }
    else if (value >= 89351 && value <= 186350) {
        tax = (((value)* 28) / 100);
        take_home = (value - tax);
    }
    else if (value >= 186351 && value <= 405100) {
        tax = (((value) * 33) / 100);
        take_home = (value - tax);
    }
    else if (value >= 405101 && value <= 406750) {
        tax = (((value)*35)/100);
        take_home = (value - tax);
    }
    else {
        tax = (((value)*39.6)/100);
        take_home = (value - tax);
    }
};

$("#salary").keyup(function() {
    var value = $(this).val();

    tax_takehome_func(value);
    take_home = 
    $('#Wages').text("Wages: $" + value);
    $('#tax').text("Tax: $" + (tax).toFixed(2));
    $('#take-home').text("Take Home: $" + ((value - tax).toFixed(2)));
    $('#monthly-take-home').text("Monthly Take Home: $" + (((value - tax)/12).toFixed(2)));
    $('#weekly').text("Weekly: $" + (((value - tax)/12)/4).toFixed(2));
    $('#hourly').text("Hourly: $" + ((((value - tax)/12)/4)/40).toFixed(2) + " in a 40 hour work week.");
});
});