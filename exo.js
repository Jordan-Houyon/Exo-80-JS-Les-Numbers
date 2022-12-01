let integer= document.getElementById('is-integer')

if(number.isInteger(integer.innerHTML)){
    integer.innerHTML+= "==> est un nombre entier";
}
else {
    integer.innerHTML+= "==> n'est pas un nombre entier";
}

let notnumber=document.getElementById('is-nan*')

if(Number.isNaN(notnumber.innerHTML)){
    notnumber.innerHTML+= "==> est un nan"
}
else{
    notnumber.innerHTML+= " ==> n'est pas NaN"
}


let float=document.getElementById('parse-float').innerHTML;

document.getElementById('parse-float').innerHTML=parseFloat(float)*22;

let int=document.getElementById('parse-int').innerHTML;

document.getElementById('parse-int').innerHTML=parseInt(int)/22+'px';

let fix=document.getElementById('to-fixed')

fix.innerHTML=parseFloat(fix.innerHTML).toFixed(2)