var num1=42;
var num2=90;
var bla= 'es mayor';
var mensaje;
if (num1 == num2) {
   mensaje = 'iguales GIL';
}
else if (num1 > num2) {
  mensaje = num1.toString().concat(bla);
}
else if (num2 > num1) {
  mensaje = num2.toString().concat(bla);
}
else {
  var mensaje = 'error critico';
}
console.log(mensaje);
