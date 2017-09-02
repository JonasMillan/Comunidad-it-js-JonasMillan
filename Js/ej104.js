function fibonacci() {
  let x=-1;
  let y=1;
  let f=0;
  var miArray =[];
    while (f<=10) {
      f=x+y;
      x=y;
      y=f;
      miArray.push(f);
    }
    console.log(miArray);
}
fibonacci();
