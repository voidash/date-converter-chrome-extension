CONTEXT_MENU_ID = 'converter';
chrome.runtime.onInstalled.addListener(() => {
    console.log('installed');
});

function showConvertedDate() {
    const style = document.createElement('style');
    style.textContent = ` .hoverShowDate{
                position:fixed; 
                background:aqua;
                width:90px;
                height:30px;
                bottom:20px;
                left:20px;
                z-index:100;
            }`;

    document.head.appendChild(style);

    let c = document.createElement('div');
    c.className = 'hoverShowDate';
    c.appendChild(document.createTextNode("hello"));
    document.body.appendChild(c);
    let closeButton = document.createElement('div');
    closeButton.appendChild(document.createTextNode('[x]'));
    closeButton.style.float = 'right';
    closeButton.style.cursor = 'pointer';
    c.appendChild(closeButton);

    setTimeout(() => {
        document.body.removeChild(c);
        document.head.removeChild(style);
    }, 5000);

    closeButton.addEventListener('click', () => {
        document.body.removeChild(c);
        document.head.removeChild(style);
    }
    );
}

function convertDate(info, tab) {
    if (info.menuItemId !== CONTEXT_MENU_ID) {
        return;
    }
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: showConvertedDate
    });
}
chrome.contextMenus.create({
    title: "Convert To Nepali Date",
    contexts: ["selection"],
    id: CONTEXT_MENU_ID
});

chrome.contextMenus.onClicked.addListener(convertDate);

