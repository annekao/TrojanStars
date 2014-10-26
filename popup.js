chrome.fontSettings.getFont(
{ genericFamily: 'standard', script: 'Arab'},
  function(details) {console.log(details.fontId) }
);