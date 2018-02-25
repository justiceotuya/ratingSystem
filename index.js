$("div.rating-circle").hover(function (index) {
        $(this).addClass("rating-hover");
        $(this).prevUntil().addClass("rating-hover");
        console.log(index);
    },
    function (index) {
        $(this).removeClass("rating-hover");
        $(this).prevUntil().removeClass("rating-hover");
        console.log(index);
    }

);

$("div.rating-circle").click(function (index) {
        $(this).addClass("rating-chosen");
        $(this).prevUntil().addClass("rating-chosen");
        console.log(index);
    }
    // ,
    // function (index) {
    //     $(this).removeClass(".rating-chosen");
    //     $(this).prevUntil().removeClass(".rating-chosen");
    //     console.log(index);
    // }

);