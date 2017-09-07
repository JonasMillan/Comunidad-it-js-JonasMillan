function elMasGrande(nombre) {
  let mensaje;
  if (nombre==='roman') {
    nombre= nombre.toUpperCase();
    mensaje = `el mejor de la historia es ${nombre}`
  }else {
    mensaje ='introducir un mejor jugador'
  }
  console.log(mensaje);
}
elMasGrande('roman')
elMasGrande('paco')
