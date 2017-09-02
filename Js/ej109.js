function autenticarUsuario(usuario,password) {
  let confirm;
  if (usuario==='nacho'&&password==='Nerd1979') {
    confirm = true;
  }else if (usuario==='pedro'&&password==='Batman') {
    confirm = true;
  }else if (usuario==='marta'&&password==='madre1234') {
    confirm = true;
  }else {
    confirm = false;
  }
  if (confirm===true) {
    mensaje = `Bienvenido ${usuario}`;
  }else if (confirm===false) {
    mensaje =`porfavor ingrese las credenciales validas`;
  }
  console.log(mensaje);
}
autenticarUsuario('jonas','millan');
autenticarUsuario('pedro','Batman');
