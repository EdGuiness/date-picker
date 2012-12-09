$(function() {

    $('#datepicker').change(function() {
        var bgPage = chrome.extension.getBackgroundPage();
        bgPage.copy($('#datepicker').val());
        window.close();
    });

    chrome.extension.sendRequest({method: "getDate_format"}, function(response) {
      var df = response.date_format;

        $('#datepicker').datepicker({'constrainInput':false, 'dateFormat': df });

        $('#datepicker').datepicker('show');
    })

});
