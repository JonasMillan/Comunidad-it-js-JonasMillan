let filas=0;
let asterisco=0;
let caracter='';
do {
  do {
  caracter+='*';
  asterisco++;
} while (asterisco<=filas);
  console.log(caracter);
  filas++;
} while (filas<=10);
