
let ADButton = document.querySelector('#convertAD');
let BSButton = document.querySelector('#convertBS');
let dateGet = document.querySelector('.todayDate');
let datePrinter = document.querySelector('.convertedDate');
dateGet.innerHTML = getTodayDate();

BSButton.addEventListener('click', () => {
    let input = document.querySelector('#dateInput').value;
    try {
        let date = moment(input);
        console.log(date);
        // moment date to JS date
        let nativeDate = date.toDate();
        if (checkDateBoundsForAD(nativeDate.getFullYear(), 0, 0)) {
            let convertedArray = convertToBS(nativeDate.getFullYear(), nativeDate.getMonth() + 1, nativeDate.getDate());
            // converted Array to 
            let data = BSinEnglish(...convertedArray);
            console.log(data);
            datePrinter.innerHTML = data;
            
        } else {
            datePrinter.innerHTML = "Date is out of bounds. 1944 AD to 2043 AD only";
        }

    } catch (e) {
        console.log(e);
    }
});
ADButton.addEventListener('click', () => {
    let input = document.querySelector('#dateInput').value;
    try {
        console.log(input);
        let date = moment(convertNepaliMonthsToEnglishForMoment(input));
        console.log(date);
        // moment date to JS date
        let nativeDate = date.toDate();
        if (checkDateBoundsForBS(nativeDate.getFullYear(), 0, 0)) {
            let convertedArray = convertToAD(nativeDate.getFullYear(), nativeDate.getMonth() + 1, nativeDate.getDate());
            // converted Array to 
            let data = moment(convertedArray.reduce((acc, cval) => acc + '/' + cval));
            console.log(data.format("YYYY MMMM DD"));
            datePrinter.innerHTML = data.format("YYYY MMMM DD");
        } else {
            datePrinter.innerHTML = "Date is out of bounds for AD. 2000 BS to 2099 BS only";
        }

    } catch (e) {
        console.log(e);
    }
});