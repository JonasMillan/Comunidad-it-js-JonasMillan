function esPar(number) {
  var consulta,mensaje;
  if (number%2===0) {
     consulta = true;
  }
  else {
     consulta = false;
  }
  if (consulta===true) {
     mensaje = `${number} es par`
  }else {
     mensaje = `${number} es impar`
  }
  console.log(mensaje);
}
esPar(2);
esPar(5);
esPar(3);
esPar(24);
esPar(12);
