let filas =0
while (filas<=7) {
  let caracter = '';
  let asterisco=0;
   while (asterisco<=filas) {
     if (asterisco%2!=0) {
     caracter+='*';
     asterisco=asterisco+2;
    }
   }
  console.log(caracter);
  filas++;
}
