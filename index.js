let display = document.getElementById('display');
let calculation = '';
function displayValue(value){
    calculation += value;
    display.value = calculation;
}
function clearDisplay(){
    calculation = '';
    display.value = calculation;
}
function backspace(){
    calculation = calculation.slice(0, -1);
    display.value = calculation;
}
function calculate(){
    try{
        let result = eval(calculation);
        calculation = result.toString();
        display.value = calculation;
    }catch(error){
        display.value = 'Error';
        calculation = '';
        
    }
}

