let usuario = {
  username:'batman',
  password:'blabla'
  autenticarUsuario: function(usuario) {
    let mensaje;
    if (usuario.username === usuario.username && usuario.password ===usuario.password) {
     return true;
    }
    else {
      return false;
    }

  }
};
if (usuario.autenticarUsuario(usuario)== true) {
  mensaje = 'BATMAN'
}
else {
  mensaje = 'not batman'
}
console.log(mensaje);
