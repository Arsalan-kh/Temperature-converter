function Convertval() {
    var tem = document.querySelector("input").value;


    if (document.getElementById("temp").value === "c") {
        celsius = (parseFloat(tem) - 32) / 1.8;
        document.getElementById("show").innerHTML = "The Celsius temperature is " + celsius
    } else if (document.getElementById("temp").value === "f") {

        fahrenheit = (parseFloat(tem) * 1.8) + 32;
        document.getElementById("show").innerHTML = "The Fahrenheit temperature is " + fahrenheit
    }



}