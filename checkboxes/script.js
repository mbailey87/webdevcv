$(document).ready(function() {
    for (let i = 0; i < 16; i++) {
        $('.grid-container').append('<div class="box"></div>');
    }

    $('.box').on('click', function() {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
        } else {
            $(this).addClass('clicked');
        }
    });
});
