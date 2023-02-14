const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function islampbroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!islampbroken ())
    lamp.src = './imagens/ligada.jpg'
    
}
function lampOff () {
    if (!islampbroken ())
    lamp.src = './imagens/desligada.jpg'
}
function breakLamp () {
    lamp.src ='./imagens/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', breakLamp)
