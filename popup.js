chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var parser = document.createElement('a');
    var url = tabs[0].url;
    parser.href = url;
    localStorage.setItem("URL", parser.href);
    var value = localStorage.getItem("hello");
    alert(value);
});
