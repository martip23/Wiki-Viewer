/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery*/

/* RGB */
$color1: rgba(255, 34, 12, 1);
$color2: rgba(211, 62, 67, 1);
$color3: rgba(155, 120, 116, 1);
$color4: rgba(102, 99, 112, 1);
$color5: rgba(28, 31, 51, 1);

$(document).ready(function () {
    "use strict";
    
    var lat, lon, weather, icon, desc, city, tempC, tempF, country, tempUnits;
    
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWeather);
        } else {
            $("#title").html("Can't get location.");
        }
    }
    
    function getWeather(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon,
            function getDetails(json) {
                city = json.name;
                country = json.sys.country;
                icon = json.weather[0].icon;
                desc = json.weather[0].main;
                tempC = Math.round(json.main.temp);
                tempF = Math.round(tempC * 1.8 + 32);
            });
        $(document).ajaxComplete(function () {
            $("#title").html(city + ", " + country);
            $("#icon-box").css("backgroundImage", "url(" + icon + ")");
            $("#description").html(desc);
            tempUnits = 'F';
            $("#temp").html(tempF + '&degF');
        });
    }
    
    $("#degree-change").on("click", function () {
        if (tempUnits === 'F') {
            $("#temp").html(tempC + '&degC');
            $("#degree-change").html("To fahrenheit");
            tempUnits = 'C';
        } else {
            $("#temp").html(tempF + '&degF');
            $("#degree-change").html("To celcius");
            tempUnits = 'F';
        }
            
        $("#temp").html();
    });
    
    getLocation();
});