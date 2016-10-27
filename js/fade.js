$(document).scroll(function () {

    var pos = $(".header-content-inner").offset().top + $(".btn").height();

    var y = $(this).scrollTop();
    if (y > pos) {
        //$('.bNav').removeClass('hidden');
        $('#footer').fadeIn();

        //alert("#1");
    } else {
        $('#footer').fadeOut();

        //alert(y);
    }

    var $spotkaniaH = $("#spotkania").height() == 0 ? 153 : $("#spotkania").height();
    $("#BIS").css({
        "max-height": $spotkaniaH
    })

    $("#radio").css({
        "max-height": $spotkaniaH
    })

});