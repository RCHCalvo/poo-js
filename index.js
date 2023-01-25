function suma (num1 ,num2) {
    return num1 + num2 
}

function resta (num3 , num4){
    return num3 - num4
}

function multiplicacion (num5 , num6){
    return num5 * num6
}

function division (num7 , num8){
    return num7 / num8
}

function Persona() {
    this.dni = '';
    this.nombre = '';

}

let res = suma(3,5);
console.log( res );

res = resta(6,4);
console.log(res);

res = multiplicacion(8,9)
console.log(res);

res = division (10, 2)
console.log(res);

let yo = new Persona();
let tu = new Persona();

yo.dni = '1234567';
yo.nombre = 'Marcos';
tu.dni = '7654321';
tu.nombre = 'Pedro';

console.log(yo);
console.log(tu);



