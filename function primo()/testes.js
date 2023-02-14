/*n=537
var cont = 0

for (let i=0; i<=n; i++){
    if (n % i == 0) {
        cont ++
    }
}

if (cont == 2) {
    console.log(`${n} é um número primo.`)
} else {console.log(`${n} não é um número primo.`)}


function tabuada(num){
    console.log(`Esta é a tabuada de ${num}.`)
    for (i=0; i<=10; i++){
        var res = num * i
        console.log(`${num} x ${i} = ${res}`)
    }   
}


for (let i=1; i<=10; i++) {
    console.log(`Esta é a tabuada de ${i}`)
    for(let j=0; j<=10; j++){
        let mul = i * j
        console.log(`${i} X ${j} = ${mul} `)
    }
}


 const array = [4, 7, 9, 0, 13, 45, 16, 45, 689, 1276, 4739]

let pares = array.filter(function(num){
    if (num % 2 == 0) {
        return num
    }
})

console.log(pares)*/

const roupas = [
    'boné', 'camiseta', 'boné', 'calças', 'bermuda', 'camiseta', 'meias', 'meias', 'tenis', 'bermuda', 'chinelo'
];

const roupasUnicas = new Set();

function addRoupa(peça) {
    roupasUnicas.add(peça);
}

roupas.forEach(addRoupa);

console.log(roupasUnicas)
