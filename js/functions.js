function suma(){
    var A = 0;
    var B = 0;
    var suma = 0;
    alert ("Este algoritmo realiza una suma de dos valores ingresados  por el usuario");

    A = parseInt(prompt("por favor ingrese el primer numero para sumar"));
    B = parseInt(prompt("por favor ingrese el segundo numero para sumar"));

    suma= A + B;
    alert ("el resultado de la suma es" +suma);

}

function operaciones(){
    var A = 0;
    var B = 0;
    var  suma,resta,multi,divi;
alert ("este algoritmo realiza una suma,resta,multiplicacion,division");

A = parseInt(prompt("porfavor escriba el primer numero para hacer los calculos"));
B = parseInt(prompt("porfavor escriba el segundo numero para hacer los calculos"));

suma =   A + B;
resta =  A - B;
multi = A * B;
divi = A / B;

alert("el resultado de la suma es" + suma);
alert("el resultado de la rest es" + resta);
alert("el resultado de la multi es" + multi);
alert("el resultado de la divi es" + divi);
}



function NMA(){
var A = 0;
var B = 0;
var NM = 0;
alert(" este algoritmo determina el mayor de dos números ingresados por el usuario");

A = parseFloat(prompt("por favor ingrese el primer numero"));
B = parseFloat(prompt("por favor ingrese el segundo numero"));
NM = A>B;
if (A>B) {
    alert ("el primer numero es mayor");
} 
else {
    alert ("el segundo numero es mayor");
}
}


function NME(){
var A = 0;
var B = 0;
var C = 0;
var D = 0;
alert("este algorit modetermina el menor de tres numeros ingresados por el usuario");

A = parseFloat(prompt("por favor ingrese el primer numero"));
B = parseFloat(prompt("por favor ingrese el segundo numero"));
C = parseFloat(prompt("por favor ingrese el tercer numero"));

if ((A<=B) && (A<=C)) {
    alert ("el primer numero es menor");
}
else if ((B<=A) && (B<=C)) {
    alert ("el segundo numero es menor");
}
else if ((C<A) && (C<B)) {
    alert ("el tercer numero es menor");
}
}



function PAR(){
    var A = 0;
    var B = 0;
    var parimpar = 0;

    A = parseInt(prompt("ingrese el primer valor a comparar"));
   

    parimpar=A<B;
    
    if ((A %2)===0){
        alert("el valor es par");
    }
    else{
        alert("el valor es impar");
    }
}





function elevado(){
    var numero=0;
    var resultado=0;
    alert("este algoritmo se realiza para determinar el cuadrado de un numero");
    numero =parseInt(prompt("por favor ingrese el numero para sacar su cuadrado"));
    resultado=numero*numero;
    alert("el cuadrado numero es:"+resultado);






}
function area(){
    var base = 0;
    var altura = 0;
    var resultado = 0;

    base = parseInt(prompt("por favor ingrese el numero base"));
    altura = parseInt(prompt("por favor ingrese el numero altura"));
    resultado=(base*altura)/2;
alert ("el area de un triangulo es:"+resultado);
}





function cenmetr(){
    var metros=0;
    var resultado=0;
    metros = parseInt(prompt("porfavor ingrese el numero en metros"));
    resultado = metros*100;
    alert ("el resultado en centimetros es"+resultado);
}


function edad(){
    var edad=0;
    var resultado=0;
    var añoact=0;


    edad= parseInt(prompt("porfavor ingrese su edad"));
    añoact=parseInt(prompt("porfavor ingrese el año actual"));

    resultado=añoact-edad;

    alert("el año que usted nacio es:"+resultado);
}

function inversion(){
    var inversion = 0;
    var resultado = 0;
    var tiempo = 0;
   

    inversion=parseInt(prompt("porfavor escriba el valor de su inversion"));
    tiempo = parseInt(prompt("porfavor escriba los años que lleva la inversion"));
   resultado=(inversion*24/100)*tiempo;

   

alert("las ganancias de interes es:" +resultado);
alert("la suma de su capital con los intereses es:" +(resultado+inversion))
}

function notas(){
    var notaa, notab,notac, notad, notae =0;
    var todas=0
    
   notaa=parseInt(prompt("porfavor escriba la primera nota"));
   notab=parseInt(prompt("porfavor escriba la segunda nota"));
   notac=parseInt(prompt("porfavor escriba la tercera nota"));
   notad=parseInt(prompt("porfavor escriba la cuarta nota"));
   notae=parseInt(prompt("porfavor escriba la quinta nota"));
   todas=(notaa+notab+notac+notad+notae)/5;
    if (todas<30) {
        alert("pierde la materia"+todas);
        
    }
    else{
        alert("pasa la materia")


    }
    

}

function manzanas(){

    function notas(){
        var n1=0;
        var n2=0;
        var n3=0;
        var n4=0;
        var n5=0;
        var pro=0;
        var n=0;
    
        alert ("este algoritmo para determinar requiere un sistema que le permita calcular el promedio de un de un alumno que tiene 5 calificaciones en la materia de ingles");
    
        n1=parseFloat(prompt("dijite la primera nota"));
        n2=parseFloat(prompt("dijite la primera nota"));
        n3=parseFloat(prompt("dijite la primera nota"));
        n4=parseFloat(prompt("dijite la primera nota"));
        n5=parseFloat(prompt("dijite la primera nota"));
    
        pro=n1+n2+n3+n4+n5
        n=pro/5
    
        alert("su promedio es: "+n);
    
        if (n<29){
            alert("usted perdio la asignatura");
        }else{
            alert("usted aprobo la asignatura")
        }
        
    
    
    }
    
    
    
    
    
    
    
    
    
}