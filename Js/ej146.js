let usuario = {
  username:'batman',
  password:'blabla'
  autenticarUsuario: function() {
    let mensaje;
    if (usuario.username ==='batman' && usuario.password ==='blabla') {
     return true;
    }
    else {
      return false;
    }

  }
};
if (usuario.autenticarUsuario()== true) {
  mensaje = 'BATMAN'
}
else {
  mensaje = 'not batman'
}
console.log(mensaje);
