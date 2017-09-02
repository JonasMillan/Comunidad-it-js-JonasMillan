function orderNumber(num,num2,num3) {
  let posi1,posi2,posi3;
  if (num>num2 && num>num3) {
        posi1=num;
        if (num2>num3) {
          posi2=num2;
          posi3=num3;
        }
        else if (num3>num2) {
          posi2=num3;
          posi3=num2;
        }
  }
  if (num2>num && num2>num3) {
        posi1=num2;
        if (num>num3) {
          posi2=num;
          posi3=num3;
        }
        else if (num3>num) {
          posi2=num3;
          posi3=num;
        }
  }
  if (num3>num && num3>num3) {
        posi1=num3;
        if (num>num2) {
          posi2=num;
          posi3=num2;
        }
        else if (num2>num) {
          posi2=num2;
          posi3=num;
        }
  }
  console.log('numeros :'+posi1+','+posi2+','+posi3);
}
