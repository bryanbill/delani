(function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[1] = "USERNAME";
    ftypes[1] = "text";
    fnames[0] = "EMAIL";
    ftypes[0] = "email";
    fnames[2] = "MESSAGE";
    ftypes[2] = "text";
})(jQuery);
var $mcj = jQuery.noConflict(true);

const elements = ['design', 'development', 'product'];

elements.forEach((element) => {
    $('.' + element).click(function () {
        $('.' + element).hide()
        $('#' + element).show()
        $('#' + element).click(function () {
            $('#' + element).hide()
            $('.' + element).show()

        })

    })
});


