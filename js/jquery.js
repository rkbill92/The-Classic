//for fixed action division


$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 665) {
        $('.actionBar').fadeIn();
    } else {
        $('.actionBar').fadeOut();
    }

});

$('#contact').click(function() {
  $('#contact-drop').toggle();
});
