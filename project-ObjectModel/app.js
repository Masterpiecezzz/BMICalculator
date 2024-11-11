class BMIApp
{
    constructor()
    {
        this.heightInput = document.getElementById('height');
        this.weightInput = document.getElementById('weight');
        this.bmiOutput = document.getElementById('bmi');
        this.bmiPointer = document.querySelector('div.bmipointer');
        this.bmiBoxes = document.getElementsByClassName('box');
        this.initializeBoxes();
        this.startBMICalculation();
    }

    initializeBoxes()
    {
        for(let box of this.bmiBoxes)
        {
            const span = box.querySelector('span');
            if(span !== null) { span.style.color = getComputedStyle(box, null)["backgroundColor"]; }
        }
    }

    clearBMI()
    {
        this.bmiOutput.value = '';
        this.bmiPointer.style.display = 'none';
    }

    calculateBMI()
    {
        const height = parseFloat(this.heightInput.value);
        const weight = parseFloat(this.weightInput.value);
        if(!height || !weight)
        {
            this.clearBMI();
            return;
        }

        const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
        if(isNaN(bmiValue))
        {
            this.clearBMI();
            return;
        }
        this.bmiOutput.value = bmiValue;
        this.updateBMIPointer(bmiValue);
        this.bmiPointer.style.display = 'block';
    }

    updateBMIPointer(bmi)
    {
        let position;
        if(bmi >= 18.5 && bmi <= 35)
        {
            if(bmi >= 18.5 && bmi <= 24.9) { position = bmi === 18.5 ? 21.5 : bmi === 24.9 ? 39.5 : 21.5 + ((bmi - 18.5) * 2.8125); }
            else if(bmi > 24.9 && bmi <= 29.9) { position = bmi === 25.0 ? 39.6 : bmi === 29.9 ? 57.4 : 39.6 + ((bmi - 24.9) * 3.5392); }
            else if(bmi > 29.9 && bmi <= 35.0) { position = bmi === 30.0 ? 57.45 : bmi === 35.0 ? 75.5 : 57.45 + ((bmi - 29.9) * 3.6836); }
        }
        else { position = bmi < 18.5 ? 12.475 : 84.5; }
        this.bmiPointer.style.left = `${position}%`;
    }

    startBMICalculation() { setInterval(() => this.calculateBMI(), 1000); }
}

const bmiApp = new BMIApp();