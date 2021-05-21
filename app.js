const celsius = document.getElementById("Celsius");
const fahrenheit = document.getElementById("Fahr");

function convertCelsiusToFahr(){
    let output = ( parseFloat(Celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(4));
}
function convertFahrToCelsius(){
    let output = ( parseFloat(Fahr.value) - 32) * 5/9;
    Celsius.value = parseFloat(output.toFixed(4));
}

function celerror(){
    alert("This is not a valid number but a string.");
}
function fahrerror(){
    alert("This is not a valid number but a string.");
}

