function obtenerPerimetroRectangulo(base,altura) {
  let perimetro;
  perimetro = (base*2)+(altura*2);
  let mensaje = `el perimetro es ${perimetro}`;
  let mensaje2;
  if (perimetro>100) {
    mensaje2 ='el perimetro es muy grande';
  }else {
    mensaje2 ='el perimetro no es muy grande';
  }
  console.log(mensaje,mensaje2);
}
obtenerPerimetroRectangulo(10000,10);
obtenerPerimetroRectangulo(5,1);
