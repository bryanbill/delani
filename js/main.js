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

const clearForm = () => {
    document.getElementById('mce-USERNAME').value = null;
    document.getElementById('mce-EMAIL').value = null;
    document.getElementById('mce-MESSAGE').value = null;
}
document.getElementById('mc-embedded-subscribe').addEventListener('click', (event) => {
    event.preventDefault();
    clearForm();
})