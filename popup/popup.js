
let ADButton = document.querySelector('#convertBS');
let BSButton = document.querySelector('#convertAD');
let dateGet = document.querySelector('.todayDate');
dateGet.innerHTML = getTodayDate();
BSButton.addEventListener('click', () => {
    console.log(getTodayDate());
});
ADButton.addEventListener('click', () => {
    console.log('clicked');
});