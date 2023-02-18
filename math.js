
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