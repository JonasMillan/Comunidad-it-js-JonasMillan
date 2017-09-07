function mostrarNumeros(inicio,fin) {
   var miArray=[];
   var mensaje;
  if (inicio>fin) {
    for (var i = inicio; i > fin; i++) {
      miArray.push(i);
    }
  }else if(fin>inicio) {
    for (var i = fin; i <= inicio ; i--) {
      miArray.push(i);
    }
  }
  console.log(miArray);
}
mostrarNumeros(1000,0);
