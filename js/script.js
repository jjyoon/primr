$('#ss-submit').click(function () {

    if (submitted == true) {
        $('form').children().not('.after-submit').animate({
            opacity: 0
        }, function () {
            $('.after-submit').fadeIn();
        });
    }

});