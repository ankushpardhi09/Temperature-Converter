function convertToCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerHTML = celsius.toFixed(2) + "°C";
}

function convertToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + "°F";
}
