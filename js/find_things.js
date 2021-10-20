(function () {

    const targetNode = document.getElementById("root");
    const config = { attributes: true, childList: true, subtree: true };
    const searchString = "github.com/username";

    let hasRun = false;
    let isDisabled = false;

    if (window.location.href !== "https://gitpod.io./teams") {
        isDisabled = true;
    }

    const callback = function (mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (document.getElementsByClassName("overscroll-contain").length === 0) {
                hasRun = false;
            } else if (mutation.type === "childList") {
                var hasClass = [].some.call(mutation.addedNodes, function (el) {
                    return "classList" in el ? el.classList.contains("pt-2") : null;
                });
                if (hasClass && !hasRun) {
                    setCount();
                    hasRun = true;
                }
            }
        }
    };

    function setCount() {

        if (!isDisabled) {
            let inactiveUserCount = 0;
            let activeUserCount = 0;

            let userTags = document.getElementsByTagName("input");

            for (let tag of userTags) {
                if (tag.getAttribute("placeholder").indexOf(searchString) > -1 || tag.nextElementSibling.innerText === "Reactivate") {
                    inactiveUserCount++;
                    tag.style.cssText = "background-color: lightgreen!important;"
                } else if (tag.getAttribute("placeholder").indexOf(searchString) === -1 || tag.nextElementSibling.innerText === "Deactivate") {
                    activeUserCount++;
                }
            }

            let newDiv = document.getElementsByClassName("pb-2")[0].nextElementSibling;
            newDiv.firstChild.innerHTML = `Add members using their username prefixed by the Git Provider's host. Currently, there are <strong>${activeUserCount}</strong> active users plus <strong>${inactiveUserCount}</strong> inactive.<br>Inactive users are highlighted in green.`
        }
    }

    chrome.storage.sync.get(["isDisabled"], function (data) {
        isDisabled = typeof (data.isDisabled) === "undefined" ? false : data.isDisabled;
        console.log(isDisabled ? "GpTeamsHelper disabled" : "GpTeamsHelper active");
    });

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area === "sync") {
            isDisabled = changes.isDisabled.newValue;
            console.log(isDisabled ? "GpTeamsHelper disabled" : "GpTeamsHelper active");
        }
    });

    if (!isDisabled) {
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
})();