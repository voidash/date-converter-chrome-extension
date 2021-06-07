/*
    since there are different format date can appear
    for example 
    Nov 21'11


*/

let dateOptions = {
    'humanFormat': ['\b[a-zA-Z]{3,9}\b', '\b[0-9]{4}\b', '\b[0-9]{2}\b'],
    'MM DD\'YY': ['([a-zA-Z]{3}) (\d{1,2})\'(\d{1,2})'],
    'iso8601': ['(\d{4})[/- ,]\(0?[0-9]|1[0-2])[/- ,](0?[1-9]|[12][0-9]|3[0-1])']
}
