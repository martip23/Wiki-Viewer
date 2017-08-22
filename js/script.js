/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery*/

/*API URL: /w/api.php?action=query&format=json&prop=info%7Cextracts&generator=search&callback=&inprop=url&exsentences=4&exintro=1&gsrsearch=Bacon&gsrlimit=20 */

$(document).ready(function () {
    "use strict";
    
    $("#random-button").on("click", function () {
        window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
    });
    
    $("#search-button").on("click", function () {
        var input;
        input = $("#search-box").val();
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&format=jsonfm&prop=info%7Cextracts" + "&generator=search&callback=&inprop=url&exsentences=4&exintro=1&gsrsearch=" + input + "&gsrlimit=20",
            success: function (json) {
                $("#result-box").html(json);
            }
        });
    });
});