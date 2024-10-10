JS

function changeStyle(){
    let x =document.getElementById('bg');
    let y =document.getElementById('background').value;
    let z =document.getElementById('text-color').value;
    x.style.background = y;
    x.style.color = z;
}
