const usuario = {
  username: null,
  password: null,
  saludar: function() {
    if (usuario.username!==null) {
      return let mensaje= `Bienvenido ${usuario.username}`
    }
    else {
      return let mensaje= 'error'
    }
  }
  updateUser: function(usuario) {
    usuario.username='username';
  }
  updatePass: function(password) {
    usuario.password='password';
  }
}
usuario.updatePass(username);
usuario.updateUser(username);
usuario.saludar();
console.log(mensaje);
