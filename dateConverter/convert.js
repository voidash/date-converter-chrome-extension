//month and date bounds month can't be greater than 12 wala part
const nepali_years_and_days_in_months = [
    [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
    [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2091, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    [2092, 30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2093, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2094, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [2095, 31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
    [2096, 30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2097, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2098, 31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31],
    [2099, 31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30],
];


function getMonthInNepali(monthIndex) {
    let month = ['बैशाख', 'जेठ', 'असार', 'श्रावण', 'भाद्र', 'आश्विन', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फाल्गुण', 'चैत्र'];
    return month[monthIndex - 1];
}

function getMonthInEnglish(monthIndex) {
    let months = ['Baisakh', 'Jestha', 'Asar', 'Shrawan', 'Bhadra', 'Aswin', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'];
    return months[monthIndex - 1];
}

function getNumberEquivalentInNepali(num) {
    let number = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return number[num];
}

function getTodayDate() {
    let date = new Date();
    let c = convertToBS(date.getFullYear(), date.getMonth(), date.getDate());
    return BSinEnglish(...c);
}

function BSinNepali(year, month, day) {
    year = year + "";
    year = year.split('').map(num => getNumberEquivalentInNepali(num)).join('');
    month = getMonthInNepali(month);
    day = (day + "").split('').map(num => getNumberEquivalentInNepali(num)).join('');

    return `${year},${month},${day}`;
}

function BSinEnglish(year, month, day) {
    month = getMonthInEnglish(month / 1);
    return `${year} ${month} ${day}`;
}

function checkDateBoundsForBS(year, month, day) {
    if (year > 2000) {
        return year >= 2001 && year <= 2099;
    }
    else if (year == 2000) {
        return month >= 9 && day >= 17;
    }
}

function checkDateBoundsForAD(year, month, day) {
    if (year >= 1944 && year < 2043) {
        return true;
    }
    return (year == 2043 && day <= 4 && month <= 13);
}

function convertToBS(year, month, day) {
    if (checkDateBoundsForAD(year, month, day)) {
        let english_year = 1944;
        let english_month = 1;
        let english_day = 1;
        let initial_date = Date.UTC(1944, 1, 1);
        let date_given = Date.UTC(year, month, day);

        // var del_milliseconds = date_given.getTime() - initial_date.getTime();
        // var days = del_milliseconds / (86400 * 1000);
        let days = Math.abs(initial_date - date_given) / (86400 * 1000);

        let nepali_year = 2000;
        let nepali_month = 9;
        let nepali_day = 17;

        //holds the index of the part
        let yearIterator = 0;
        let monthIterator = nepali_month;
        let dayIterator = nepali_day;

        let yearPart = nepali_years_and_days_in_months[yearIterator];
        while (days >= yearPart[monthIterator]) {
            yearPart = nepali_years_and_days_in_months[yearIterator];
            let monthPart = yearPart[monthIterator];
            days = days - monthPart;

            if (days >= 0) {
                monthIterator++;
            }
            if (monthIterator > 12) {
                monthIterator = 1 / 1;
                yearIterator++;
            }


        }

        dayIterator = 17 + days;
        if (dayIterator > nepali_years_and_days_in_months[yearIterator][monthIterator]) {
            monthIterator++;
            dayIterator -= nepali_years_and_days_in_months[yearIterator][monthIterator];
        }

        if (month > 12) {
            yearIterator++;
        }

        if (yearIterator > 100) {
            yearIterator -= 100;
            yearIterator = "21" + yearIterator;
        } else {
            yearIterator = "20" + yearIterator;
        }

        // console.log(yearIterator + " " + monthIterator + " " + dayIterator);

        return [yearIterator / 1, monthIterator, dayIterator];
    }
    return [0, 0, 0];
}


function convertToAD(year, month, day) {
    // known data is that . january 1 1944 is 2000 paush 17

    let english_year = 1944;
    let english_month = 1;
    let english_day = 1;
    let initial_date = new Date(1944, 1, 1);

    let nepali_year = 2000;
    let nepali_month = 9;
    let nepali_day = 17;

    //check if date falls inside our array data.
    if (checkDateBoundsForBS(year, month, day)) {
        return calculate();
    }

    function calculate() {
        //get to the initial position of 2000/paush/17
        del_days = 0;
        //array index position
        aip = (year + "").substr(2, 2) / 1; //convert to string through coersion
        m = nepali_years_and_days_in_months[aip];

        //array index start from 0
        for (let i = month - 1; i >= 1; i--) {
            del_days += m[i];
        }
        del_days += day - 1;
        for (let i = aip - 1; i > 0; i--) {
            m = nepali_years_and_days_in_months[i];
            for (let j = 1; j < 13; j++) {
                del_days += m[j];
            }
        }

        // after paush 17, 102 days are remained
        del_days += 102;
        del_days -= 30;

        initial_date.setDate(initial_date.getDate() + del_days);
        return [initial_date.getFullYear(), initial_date.getMonth() + 1, initial_date.getDate()];
    }
    throw new Error(`Date is out of bounds`);
}

console.log(getTodayDate());
console.log(convertToAD(2078, 03, 25));
console.log(convertToBS(2021, 07, 09));
console.log(convertToBS(2021, 08, 09));
console.log(convertToBS(2023, 06, 09));



