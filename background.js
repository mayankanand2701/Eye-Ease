// Set up alarm to trigger every 20 minutes
chrome.alarms.create({ delayInMinutes: 20, periodInMinutes:20  });

// Open a new browser window if user is not using the browser
chrome.idle.onStateChanged.addListener((state) => {
  if (state === "idle") {
    chrome.windows.create({ url: "popup.html", type: "popup", width: 350,height:250});
  }
});

// Open popup.html when alarm triggers
chrome.alarms.onAlarm.addListener(() => {
  chrome.windows.create({ url: "popup.html", type: "popup", width: 350,height:250});
});


