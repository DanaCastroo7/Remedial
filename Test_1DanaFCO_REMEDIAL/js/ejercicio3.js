console.log("ejercicio 3");

function ejercicio3(l1, l2, l3){

    s = (l1 + l2 + l3)/2;
    area = Math.sqrt(s * (s - l1) * (s - l2) * (s -l3)).toFixed(2) ;
    return area;
}

