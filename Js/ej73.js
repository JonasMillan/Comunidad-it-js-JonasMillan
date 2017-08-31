let filas =0
while (filas<=10) {
  let caracter = '';
  let asterisco=0;
  let limite=10;
   while (asterisco<=limite) {
     caracter+='*';
     asterisco--;
   }
   limite--;
  console.log(caracter);
  filas++;
}
