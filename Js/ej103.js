var miArray = [];
function numeroPares() {
  for (var i = 0; i <=100 ; i++) {
    if (i%2===0) {
      miArray.push(i);
    }
  }
}
numeroPares();
console.log(miArray);
