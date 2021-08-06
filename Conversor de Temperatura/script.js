
document.getElementById("btnSubmit").onclick = function() {
  
  var valorCelcius =  parseFloat(document.getElementById("celcius").value.replace(",","."));

  var fahrenheitConvertido = ((valorCelcius * 9/5) + 32).toFixed(2);
  document.getElementById("resultadoCelcius").innerHTML = fahrenheitConvertido;
}

document.getElementById("btnSubmit1").onclick = function() {
  
  var valorFahrenheit =  parseFloat(document.getElementById("fahrenheit").value.replace(",","."));

  var celciusConvertido = ((valorFahrenheit - 32) * 5/9).toFixed(2);
  document.getElementById("resultadoFahrenheit").innerHTML = celciusConvertido;
}
 