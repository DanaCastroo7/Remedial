console.log("ejercicio 4");

function ejercicio4(sueldo){
    if (sueldo < 1000){
        porcentaje = 0.15;
    }else 
    if (sueldo > 1000 ){
        porcentaje =0.12;
    }
    nuevo_sueldo = sueldo + porcentaje;
    return nuevo_sueldo;
}