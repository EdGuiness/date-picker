
chrome.extension.sendRequest({method: "getDate_format"}, function(response) {
    var df = response.date_format || 'mm/dd/yy';
    $(':text').datepicker({'constrainInput':false, 'dateFormat': df }).unbind('focus').dblclick(function() {
        $(this).datepicker('show');
    });

});

