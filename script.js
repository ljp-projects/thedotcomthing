chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {

        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            css: `
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
    
            @keyframes spin-other {
                from {
                    transform: rotate(360deg) scale(0.95);
                }
                
                to {
                    transform: rotate(0deg) scale(0.95);
                }
            }
    
            body * {
                animation: spin-other 10s linear infinite;
            }
    
            .dotcom-virus-heading {
                font-size: 7.5rem;
                font-weight: 800;
            }

            .dotcom-virus-centre {
                position: absolute;
                top: 0;
                left: 0;
                margin: 1vw;
                animation: none !important;
            }
          `
        });
        
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: () => {
                document.querySelector("body").innerHTML += "<div class='dotcom-virus-centre'><h1 class='dotcom-virus-heading'>The Dotcom Thing :D</h1></div>"
                document.querySelectorAll("body *").forEach(element => {
                    element.setAttribute("href", "")
                    element.setAttribute("onsubmit", "")
                    element.setAttribute("onclick", "")
                    element.setAttribute("src", "")
                })
            }
        })

    }
})

/*
body {
    animation: spin 10s linear infinite;
}
*/