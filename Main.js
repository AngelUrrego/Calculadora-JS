const input = document.getElementById("input");
const buttonClear = document.getElementById("clear");
const buttonNumbers = document.getElementsByName("numbersCalculator")
const buttonResult = document.getElementById("result")

//Agregar numero al input
function addNumbers() {
    let buttonValue = event.target.textContent;
    input.value += buttonValue;
}

/*Evento Click para agregar el numero al input
se utiliza forEach para recorrer cada boton*/
buttonNumbers.forEach(function(button) {
    button.addEventListener("click", addNumbers);
});

//limpiar input
function clears(){
    input.value = ""
}
buttonClear.addEventListener("click", clears);

//Realizar operacion con la funcion eval
function calculate() {
    let result = eval(input.value);
    input.value = result;
}

buttonResult.addEventListener("click" ,calculate)
