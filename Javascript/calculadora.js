let calcu=parseInt(prompt("Ingrese la operacion que desea realizar 1:Suma 2:Resta 3:Multiplicacion 4:Division"))

if (calcu==1) {
    let n1=parseInt(prompt("Ingrese el primer numero"))
    let n2=parseInt(prompt("Ingrese el segundo numero"))

    var result=n1+n2
    document.write("El resultado es " +result)
}

if (calcu==2){
    let n1=parseInt(prompt("Ingrese el primer numero"))
    let n2=parseInt(prompt("Ingrese el segundo numero"))

    var result=n1-n2
    document.write("El resultado es " +result)
}

if (calcu==3) {
    let n1=parseInt(prompt("Ingrese el primer numero"))
    let n2=parseInt(prompt("Ingrese el segundo numero"))

    var result=n1*n2
    document.write("El resultado es " +result)
}

if (calcu==4) {
    let n1=parseInt(prompt("Ingrese el primer numero"))
    let n2=parseInt(prompt("Ingrese el segundo numero"))

    var result=n1/n2
    document.write("El resultado es " +result)
}