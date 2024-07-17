const card = []

//card conterá 12 objetos com 2 propriedades (conteiner da carta,img da carta)
for (let pos in document.getElementsByClassName('card')){
    card.push({conteiner:document.getElementsByClassName('card')[pos],img:document.getElementsByTagName('img')[pos]})
}

//Adicionando listeners nos conteiners das cartas
for (let pos in card) {
    card[pos].conteiner.addEventListener('click',GeneralFunction)
}

function GeneralFunction() {
    
}


