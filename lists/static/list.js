jQuery(document).ready(function () {
    $('form input').on('keypress', function () {
        $('.has-error').hide();
    });
});
