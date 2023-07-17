const bmiboxes = document.getElementsByClassName('box')
for(let i = 0; i < bmiboxes.length; i++) {if(bmiboxes[i].querySelector('span') !== null) {bmiboxes[i].querySelector('span').style.color = getComputedStyle(bmiboxes[i], null)["backgroundColor"]}}

let heightbmi = document.getElementById('height')
let weightbmi = document.getElementById('weight')
let bmi = document.getElementById('bmi')
let bmipointer = document.querySelector('div.bmipointer')


setInterval(() =>
{
    function ifnot()
    {
        bmi.value = ''
        bmipointer.style.display = 'none'
    }
    if((heightbmi.value !== '')&&(weightbmi.value !== ''))
    {
        let tempbmi = (weightbmi.value / (Math.pow((heightbmi.value) / 100, 2))).toFixed(2)
        if(tempbmi != 'NaN') {bmi.value = tempbmi}
        else {ifnot()}
        if((tempbmi >= 18.5)&&(tempbmi <= 35))
        {
            if((tempbmi >= 18.5)&&(tempbmi <= 24.9))
            {
                if(tempbmi == 18.5) {bmipointer.style.left = '21,5%'}
                else if (tempbmi == 24.9) {bmipointer.style.left = '39.5%'}
                else {bmipointer.style.left = (21.5 + ((tempbmi - 18.5) * 2.8125)) + '%'}
            }
            if((tempbmi > 24.9)&&(tempbmi <= 29.9))
            {
                if((tempbmi > 24.9)&&(tempbmi <= 25.0)) {bmipointer.style.left = '39.6%'}
                else if (tempbmi == 24.9) {bmipointer.style.left = '57.4%'}
                else {bmipointer.style.left = (39.6 + ((tempbmi - 24.9) * 3.5392)) + '%'}
            }
            if((tempbmi > 29.9)&&(tempbmi <= 35.0))
            {
                if((tempbmi > 29.9)&&(tempbmi <= 30.0)) {bmipointer.style.left = '57.45%'}
                else if (tempbmi == 35.0) {bmipointer.style.left = '75.5%'}
                else {bmipointer.style.left = (57.45 + ((tempbmi - 29.9) * 3.6836)) + '%'}
            }
        }
        else
        {
            if(tempbmi < 18.5) {bmipointer.style.left = '12.475%'}
            if(tempbmi > 35) {bmipointer.style.left = '84.5%'}
        }
        bmipointer.style.display = 'block'
    }
    else {ifnot()}
})