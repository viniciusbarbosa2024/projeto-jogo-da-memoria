const gameStatus = document.getElementById('gameStatus')

const numberOfPairsFound = document.getElementById('numberOfPairsFound')

const HTMLcard = []

//card conterá 12 objetos com 2 propriedades (conteiner da carta,tag img da carta)
for (let pos = 0;pos <= 11;pos++ ){
    HTMLcard.push({conteiner:document.getElementsByClassName('card')[pos],tagImg:document.getElementsByTagName('img')[pos]})
}

const card = [
    {nome:'acordeon',img:'images/acordeon.jpg'},
    {nome:'bateria',img:'images/bateria.jpg'},
    {nome:'guitarra',img:'images/guitarra.jpg'},
    {nome:'piano',img:'images/piano.jpg'},
    {nome:'violao',img:'images/violao.jpg'},
    {nome:'violino',img:'images/violino.jpg'},
    {nome:'acordeon',img:'images/acordeon.jpg'},
    {nome:'bateria',img:'images/bateria.jpg'},
    {nome:'guitarra',img:'images/guitarra.jpg'},
    {nome:'piano',img:'images/piano.jpg'},
    {nome:'violao',img:'images/violao.jpg'},
    {nome:'violino',img:'images/violino.jpg'},        
]


const possibleRandomNumbers = [0,1,2,3,4,5,6,7,8,9,10,11]

const visiblePair = []

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

        HTMLcard[pos].tagImg.classList.add(`${card[randomNumber].nome}`)
        HTMLcard[pos].tagImg.setAttribute('src',`${card[randomNumber].img}`)
    }
}

function viewCard(index) {
    HTMLcard[index].tagImg.classList.add('visivel')
}

function replaceImgs() {
    //Adiciona a imagem com ícone de verificação
    visiblePair[0].setAttribute('src','images/icone-de-verificacao.webp')
    visiblePair[1].setAttribute('src','images/icone-de-verificacao.webp')
}

function foundPair() {
    //Remove todas as classes da tag img associada a carta encontrada + adiciona a class 'encontrado'
    visiblePair[0].className = 'encontrado'
    visiblePair[1].className = 'encontrado'
}

function hideCards() {
    //oculta as cartas
    visiblePair[0].classList.remove('visivel')
    visiblePair[1].classList.remove('visivel')
}

function displayNumberOfPairsFound() {
    let DoubleNumberOfPairsFound = 0
    for (let pos in HTMLcard) {
        if (HTMLcard[pos].tagImg.className == 'encontrado') {
            DoubleNumberOfPairsFound +=1
        }
    }

    numberOfPairsFound.innerHTML = DoubleNumberOfPairsFound/2
}

function congratulations() {
    if (numberOfPairsFound.innerHTML == 6) {
        gameStatus.innerHTML = 'Parabéns,você encontrou todas as combinações!'
    }
}


for (let pos in HTMLcard) {
    HTMLcard[pos].conteiner.addEventListener('click',() => generalFunction(pos))
}

shuffleCards()

function generalFunction(index) {
    //Evitar que haja execução da função para cartas já encontradas
    if (HTMLcard[index].tagImg.className == 'encontrado') {
        return
    }
    
    visiblePair.push(HTMLcard[index].tagImg)

    if (visiblePair.length <=2) {
        viewCard(index)
    }


    if (visiblePair.length == 2) {
        const promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                 if (visiblePair[0].classList[0] == visiblePair[1].classList[0]) {
                    resolve('equalPair')
                } else {
                    reject('diferentPair')        
                }},1000)
        })  
        
        promise.then(() => {
            foundPair()
            replaceImgs()
        }).catch(()=> {
            alert('Tente novamente')
            hideCards()
        }).finally(()=> {
            displayNumberOfPairsFound()
            visiblePair.splice(0)
        }) 
    }

    setTimeout(congratulations,1000)
    
}





 


