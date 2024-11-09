function impares(n1, n2){
    var str = n1;
    for (i=n1+1; i<n2; i++){
        if (i%2 ==1){
          str += ',' + i + "<br>";
        }
    }
    document.write(str);
  }

impares(1,100)
  