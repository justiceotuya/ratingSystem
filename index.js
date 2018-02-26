//update input number
$("#max-value").on("change, paste, keyup", function () {});
//on clicking input[type=submit]; make circles corresponding to input number
$("#update-max-value").click(function () {
    var chosenValue = $("#max-value")[0].value;

    //dynamically 
    for (var i = 0; i < chosenValue; i++) {
        $('div#rating-container').append(
            '<div class="rating-circle"></div>'
        );
        var chosen = false;
        if (!chosen) {
            $("div.rating-circle").hover(function () {
                    //on click this removes the color for rating chosen from the selected circle
                    $(this).removeClass("rating-chosen");
                    //this removes the color rating from other circles before it
                    $(this).prevUntil().removeClass("rating-chosen");
                    //this removes the color rating from selected circle when mousing out towards the direction of the previous  circles
                    $(this).next().removeClass("rating-chosen");
                    $(this).addClass("rating-hover");
                    $(this).prevUntil().addClass("rating-hover");
                },
                function () {
                    //remove the hover color if the mouse is not focused on the circle 
                    $(this).removeClass("rating-hover");
                    $(this).prevUntil().removeClass("rating-hover");
                });
        }

        //This add the green color when clicked
        $("div.rating-circle").each(function () {
            $(this).click(function (index) {
                $(this).addClass("rating-chosen");
                $(this).prevUntil().addClass("rating-chosen");
                chosen = true;
            });
        });

        $('#reset').on('click', function () {
            $('#max-value')[0].value = 0;
            event.preventDefault();
            $("div.rating-circle").remove();
        });
    }
});