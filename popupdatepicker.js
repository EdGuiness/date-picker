$(function() {

    $('#datepicker').change(function() {
        var bgPage = chrome.extension.getBackgroundPage();
        bgPage.copy($('#datepicker').val());
        window.close();
    });

    var df='dd/mm/yy';
    var language = navigator.language || navigator.browserLanguage || navigator.userLanguage || 'en';

    if (language=='en-US' || language=='en' ) {
        df='mm/dd/yy';
    }

    $('#datepicker').datepicker({'constrainInput':false, 'dateFormat': df });

    $('#datepicker').datepicker('show');

});
