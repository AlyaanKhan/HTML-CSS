function calculateBMI(){
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(isNaN(height) || isNaN(weight) || height<=0 || weight <=0){
        document.getElementById('result').innerHTML = "Please enter valid height and weight!"
        return
    }
    const bmi = weight / (height * height)

    let category = ''
    if (bmi < 18.5){
        category = 'UnderWeight';
    } else if (bmi >= 18.5 && bmi < 24.9){
        category = 'Normal Weight';
    }else if (bmi >= 25 && bmi < 29.9){
        category = 'Overweight';
    }else{
        category = 'Obese';
    }

    const resultText = `Your BMI is ${bmi.toFixed(2)} (${category})`
    document.getElementById('result').innerHTML = resultText;
}
function resetCalculator(){
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result').innerHTML = '';
}
