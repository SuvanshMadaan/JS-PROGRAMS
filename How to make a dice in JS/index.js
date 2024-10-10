let min = 1;
let max = 6;
let z = document.getElementById('mylabel');
let rand;

function generator(){
    z.textContent= Math.floor(Math.random() * (max-min) + min);
}
