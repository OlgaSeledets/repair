$(document).ready(function() {
    const button = $('#button');
    const modal = $('#modal');
    const close = $('#close');

    button.on('click', function() {
        modal.addClass('modal_active');
    });

    close.on('click', function() {
        modal.removeClass('modal_active');
    });
});