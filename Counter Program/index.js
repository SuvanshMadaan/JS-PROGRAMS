const countlabel =document.getElementById('countLabel');
let count =0;

function increase(){
    count++;
    countlabel.textContent = count;
}

function decrease(){
    count--;
    countlabel.textContent = count;
}

function reset(){
    count = 0;
    countlabel.textContent = count;
}
