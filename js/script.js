const HTMLcard = []

//card conterá 12 objetos com 2 propriedades (conteiner da carta,tag img da carta)
for (let pos in document.getElementsByClassName('card')){
    HTMLcard.push({conteiner:document.getElementsByClassName('card')[pos],Tagimg:document.getElementsByTagName('img')[pos]})
}

const card = [
    'images/acordeon.jpg',
    'images/bateria.jpg',
    'images/guitarra.jpg',
    'images/piano.jpg',
    'images/violao.jpg',
    'images/violino.jpg',
    'images/acordeon.jpg',
    'images/bateria.jpg',
    'images/guitarra.jpg',
    'images/piano.jpg',
    'images/violao.jpg',
    'images/violino.jpg'     
]

const returnedNumbers = []
let randomNumber = null

function generateRandomNumber() {
    //Gerar número aletório entre 0 e 11

    let randomNumber = Math.floor(12*Math.random())
    
    if (returnedNumbers.indexOf(randomNumber) == -1) {
        returnedNumbers.push(randomNumber)
        return randomNumber
    } 
    
}


for (let pos in HTMLcard) {
    // do {
    //     randomNumber = generateRandomNumber()
    // } while (randomNumber == undefined)

    //Não sei como vou gerar uma sequência de 12 números aleatórios sem forçar a memória do pc

    HTMLcard[pos].Tagimg.setAttribute('src',card[pos])
}
 


