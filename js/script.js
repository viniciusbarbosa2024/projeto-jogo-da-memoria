const HTMLcard = []

//card conterá 12 objetos com 2 propriedades (conteiner da carta,tag img da carta)
for (let pos = 0;pos <= 11;pos++ ){
    HTMLcard.push({conteiner:document.getElementsByClassName('card')[pos],tagImg:document.getElementsByTagName('img')[pos]})
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


const possibleRandomNumbers = [0,1,2,3,4,5,6,7,8,9,10,11]

function CheckIfThereAreLargerNumbersNotReturned(number) {
    while (number <= 11) {
        if (possibleRandomNumbers.indexOf(number) != -1) {
            possibleRandomNumbers[possibleRandomNumbers.indexOf(number)] = 'retornado'
            return number    
        } else {
            number +=1
        }
    }

    //Se não houver nenhum número maior do que o randomNumber ainda não retornado então essa função retorna undefined
}

function CheckIfThereAreSmallerNumbersNotReturned(number) {
    while (number >= 0) {
        if (possibleRandomNumbers.indexOf(number) != -1) {
            possibleRandomNumbers[possibleRandomNumbers.indexOf(number)] = 'retornado'
            return number    
        } else {
            number -=1
        }
    }


}

function generateRandomNumber() {
    //Gerar número aletório entre 0 e 11 (geração única)

    let randomNumber = Math.floor(12*Math.random()) //Anotar sobre random

    //Verificar se o randomNumber foi utilizado
    if (possibleRandomNumbers.indexOf(randomNumber) != -1) {
        possibleRandomNumbers[possibleRandomNumbers.indexOf(randomNumber)] = 'retornado'
        return randomNumber
    } else {
        //randomNumber já utilizado -> verificação se há números maiores que o randomNumber disponíveis
        let returnCheckIfThereAreLargerNumbersNotReturned = CheckIfThereAreLargerNumbersNotReturned(randomNumber+1)
        if (returnCheckIfThereAreLargerNumbersNotReturned != undefined) {
            return returnCheckIfThereAreLargerNumbersNotReturned
        } else {
            //Não há números maiores disponíveis -> verificação se há números menores que o randomNumber disponíveis
            return CheckIfThereAreSmallerNumbersNotReturned(randomNumber-1)
        }
    }
    
    
}

function shuffleCards() {
    for (let pos in HTMLcard) {
        let randomNumber = generateRandomNumber()

        HTMLcard[pos].tagImg.setAttribute('src',`${card[randomNumber]}`)
    }
}

function viewCard(index) {
    HTMLcard[index].tagImg.classList.add('visivel')

    //Preciso que seja visível apenas um par de cartas
}

for (let pos in HTMLcard) {
    HTMLcard[pos].conteiner.addEventListener('click',() => viewCard(pos))
}

shuffleCards()


 


