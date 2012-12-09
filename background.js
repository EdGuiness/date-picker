function copy(str) {
    var sandbox = $('#clipboard').val(str).select();
    document.execCommand('copy');
    sandbox.val('');
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getDate_format")
      sendResponse({date_format: localStorage['date_format']});
});
