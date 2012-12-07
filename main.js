var df='dd/mm/yy';
var language = navigator.language || navigator.browserLanguage || navigator.userLanguage || 'en';

if (language=='en-US' || language=='en' ) {
    df='mm/dd/yy';
}

$(':text').datepicker({'constrainInput':false, 'dateFormat': df }).unbind('focus').dblclick(function() {
    $(this).datepicker('show');
});

