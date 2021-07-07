'use strict';
let toggleSwitch = document.getElementById("toggle");
let status = document.getElementById("status");

chrome.storage.sync.get(["isDisabled"], function(data) {
    toggleSwitch.checked = !data.isDisabled;
    setStatusText(data.isDisabled);
});

toggleSwitch.addEventListener("click", function toggleOnOff(btn) {
    let isDisabled = !document.getElementById('toggle').checked;
    setStatusText(isDisabled);
    chrome.storage.sync.set({
        isDisabled: isDisabled
    })
});

function setStatusText(isDisabled) {
    if (isDisabled) {
        status.innerHTML = "Gitpod Team Admin is disabled";
    } else {
        status.innerHTML = "Gitpod Team Admin is enabled";
    }
}