CONTEXT_MENU_ID = 'converter';
chrome.runtime.onInstalled.addListener(() => {
    console.log('installed');
});

function showConvertedDate() {

    chrome.storage.local.get(['date'], (result) => {
        if (chrome.runtime.lastError)
            console.log('Error getting');
        console.log('retrieved name : ' + result['date']);
        const style = document.createElement('style');
        style.textContent = ` .hoverShowDate{
                position:fixed; 
                background:aqua;
                width:190px;
                height:40px;
                bottom:20px;
                left:20px;
                z-index:100;
            }`;

        document.head.appendChild(style);

        let c = document.createElement('div');
        c.className = 'hoverShowDate';
        let d = document.createElement('div');
        d.className = "conversionDatePlaceHolder";
        d.innerHTML = result['date'];
        d.style.fontSize = '15px';
        c.appendChild(d);
        document.body.appendChild(c);
        let closeButton = document.createElement('div');
        closeButton.style.fontSize = '15px';
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
    });

}

function convertDate(info, tab) {
    if (info.menuItemId !== CONTEXT_MENU_ID) {
        return;
    }
    console.log("Word " + info.selectionText + " was clicked.");
    try {
        let date = moment(info.selectionText);
        console.log(date);
        // moment date to JS date
        let nativeDate = date.toDate();
        if (checkDateBoundsForAD(nativeDate.getFullYear(), 0, 0)) {
            let convertedArray = convertToBS(nativeDate.getFullYear(), nativeDate.getMonth() + 1, nativeDate.getDate());
            // converted Array to 
            data = BSinEnglish(...convertedArray);
            chrome.storage.local.set({ 'date': data }, function () {
            });
        } else {
            data = "not valid ";
            chrome.storage.local.set({ 'date': 'Not a valid date' }, function () {
            });
        }

    } catch (e) {
        console.log(e);
    }

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

