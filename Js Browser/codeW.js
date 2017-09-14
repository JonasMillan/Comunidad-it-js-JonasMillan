function partes(x) {
  for (var i = 0; i < x.length; i++) {
     console.log(x.charAt(i));
  }
}
function fakeBin(x){
  var newArr =[];
  for(var i=0; i<=x.length; i++){
   var num = x.charAt(i);
   if(num>=5){
     newArr += '1'
   }else{
     newArr += '0'
   }
  }
  return newArr;
}

function fakeBin(str){
  var newStr = "";
  for(var i=0;i<str.length;i++){
    if(Number(str[i])>=5){
      newStr += "1"
    }
    else{
      newStr += "0";
    }
  }
  return newStr;
}

function likes(arr) {
  var mensaje;
  if (arr.length==0 || arr.length==null) {
    return 'no one like this';
  }else {
    for (var i = 0; i < arr.length; i++) {
      if (arr.length==1) {
        mensaje = `${arr[0]} like this`;
      }else if (arr.length==2) {
        mensaje = `${arr[0]} and ${arr[1]} like this`;
      }else if (arr.length==3) {
        mensaje = `${arr[0]},${arr[1]} and ${arr[2]} like this`;
      }else if (arr.length>=4) {
        mensaje = `${arr[0]},${arr[1]} and ${arr.length} others like this`;
      }
    }
  }
  return mensaje;
}
function findShort(str){
  let arr = [];
  let cont=0;
  for (var i = 0; i <= str.length; i++) {
    if (str[i]==' ' ||i==str.length ) {
      arr.push(cont);
      cont=0;
    }else {
      cont++;
    }
  }
  let min =Math.min.apply(null, arr);
  return min;
}
