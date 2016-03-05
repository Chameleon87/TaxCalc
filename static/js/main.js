$(document).ready(function () {
    //set variables
    var tax;
    var take_home;
    //Take home Salary calc
    var tax_takehome_sal = function (value) {
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
            tax = (((value) * 35) / 100);
            take_home = (value - tax);
        }
        else {
            tax = (((value) * 39.6) / 100);
            take_home = (value - tax);
        }
    };
    //Take home Hourly calc
    var tax_takehome_hour = function (value) {
            
    };
    
    var salary = $('.salary-chart');
    var hourly = $('.hourly-chart');
    // Toggle() Charts
    salary.hide();
        $('.salary').on('click', function() {
            hourly.hide();
            salary.toggle();
    }),
    hourly.hide();
        $('.hourly').on('click', function() {
            salary.hide();
            hourly.toggle();
    }),
    // JavaScript Rendering #salary
    $("#salary").keyup(function() {
        var value = $(this).val();
        tax_takehome_sal(value);
        take_home = 
            $('#Wages').text("Wages: $" + value);
            $('#tax').text("Tax: $" + (tax).toFixed(2));
            $('#take-home').text("Take Home: $" + ((value - tax).toFixed(2)));
            $('#monthly-take-home').text("Monthly Take Home: $" + (((value - tax)/12).toFixed(2)));
            $('#weekly').text("Weekly: $" + (((value - tax)/12)/4).toFixed(2));
            $('#hourly').text("Hourly: $" + ((((value - tax)/12)/4)/40).toFixed(2) + " in a 40 hour work week.");
        }),
    // JavaScript Rendering #hourly
    $('#hourly').keyup(function() {
        var value = $(this).val();
        tax_takehome_hour(value);
        take_home = 
            $('#hourly-weekly').text("Weekly: $" + (((value - tax)/12)/4).toFixed(2));
        });
});
