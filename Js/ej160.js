let propiedades = [nombre,precio,cantidadVendida,localidad]
let juegos =
{
  nombre: 'halo',
  precio: 60,
  cantidadVendida: '2millones',
  localidad: 'usa'
}
{
  nombre: 'Mario',
  precio: 60,
  cantidadVendida: '1millones',
  localidad: 'japon'
}
{
  nombre: 'R7',
  precio: 60,
  cantidadVendida: '1.5millones',
  localidad: 'usa'
}
{
  nombre: 'the witcher',
  precio: 60,
  cantidadVendida: '5millones',
  localidad: 'usa'
}
juegos.forEach(function (juego) {
  propiedades.forEach(function(propiedad) {
    console.log(juego[propiedad]);
  });
});
