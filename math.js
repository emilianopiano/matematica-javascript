const valor = document.querySelector('#valor');
const inputCupon = document.querySelector('#descuento');
const resultado = document.querySelector('.resul input');
const total = document.querySelector('#resulta');
const btn = document.querySelector('.salida button');


 
   btn.addEventListener("click", calcularDescuento)


    console.log()
   

   

function calcularDescuento(){

    
    
    let cupon = inputCupon.value;
    let valordes;

    console.log(cupon);


    let arregloObj = [];

    arregloObj.push({

        name:"Hola_Mundo",
        descuento: 15,
    });

   arregloObj.push({

        name:"No_digas",
        descuento: 30,
    });

    console.log(arregloObj)




    function filtrar(elementCupon, indice){

       
        if ( elementCupon.name == cupon){


            let indice = elementCupon.findIndex((elemento, indice) => {

                return true;
            });
             
        };

    }

   const restdoFiltro = arregloObj.filter(filtrar);

   if(restdoFiltro.length > 0){

    console.log(restdoFiltro);

    console.log(restdoFiltro.length);

    valordes = restdoFiltro[indice].descuento


   }
   
   
   




   

   /* let = arregloObj = {

        'Hola_Mundo':15,
        'No_digas':30,
    };

    if(arregloObj[cupon]){

        valordes = arregloObj[cupon]


    }
    else{

        return total.innerHTML = "Ingresa un coupon valido";
    }*/

    // switch (cupon) {
    //     case "Hola_Mundo":

    //     valordes = 15;
            
    //         break;
    //         case "No_digas":

    //         valordes = 30;
                
    //             break;
    
    //     default:
    //         total.innerHTML = "El cupon no es valido";
    //         return
    //         break;
    // }

    // if( cupon == "Hola_Mundo"){

    //     valordes = 15;
    // }
    // else if(cupon == "No_digas") {

    //   valordes = 30;
        
    // }
    // else if(cupon == "Fernado") {

    //     valordes = 50;
          
    //   }
    
    // else {

    //     return "ingresa algun cupon valido"
        
    // }

    console.log("hola");
    
    const des = valordes;
    const val = valor.value;
    const res = (des/100)*val;
    const restotal = val-res;

    

    console.log(res);
    console.log(restotal);
    total.innerHTML = "resultado" + " " + restotal;

   


    

}


console.log(valor.value);






console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;


const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({

    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,


})


function calcularCuadrado(lado1){

    return {
        perimetro: lado1*4,
        area: lado1*lado1,
    }
}

console.groupEnd('Cuadrado')

console.group('Triangulo')


const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura){

    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}



console.log({

alturaTriangulo,
areaTriangulo,
ladoTriangulo1,
ladoTriangulo2,
ladoTrianguloBase,
perimetroTriangulo,
})

console.groupEnd('Triangulo')

console.group('Circle')

const radioCirculo = 3;
const diametroCirculo = radioCirculo*2;
const PI= Math.PI;

const circunferencia = diametroCirculo*PI;
const areaCirculo = (radioCirculo ** 2)*PI;


console.log({

    PI,
    diametroCirculo,
    circunferencia,
    areaCirculo,



})

function calcularCirculo(radio){

    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return{

        circunferencia: diametro * PI,
        area: radioAlCuadrado * PI,
    }


}




console.groupEnd('Circle')

console.group('Escaleno')




function alturaEscaleno(a, b, c){

    /* S = semiperimetro = a+b+c/2*/
    
    if (a===b || b===c || c===a ){

        console.warn('NO es un triangulo Escaleno')
        
    }

    else {

        const S = (a+b+c)/2;

        return (2/a)*(Math.sqrt(S*(S-a)*(S-b)*(S-c)));

        

 }
    
    








}







console.groupEnd('Escaleno')