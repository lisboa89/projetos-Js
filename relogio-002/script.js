const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const body = document.getElementById('body')


function relogio() {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
     
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    if ( hr < 10) {
        horas.textContent = '0'+ hr;
    }
    if ( min < 10) {
        minutos.textContent = '0'+ min;
    }
    if ( sec < 10) {
        segundos.textContent = '0'+ sec;
    }

    }

function toggle(){
    if(body.className == 'bg1'){
        body.className = 'bg2'
    }
    else {
        body.className = 'bg1'
    }
}

setInterval(relogio, 500)

for (var i = 0; i>0; i++) {
    if (i % 2 == 0) {
        console.log (i)
    }
}