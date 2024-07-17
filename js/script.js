const cards = []

//Declarando todas as cards dentro do array card
for (let pos in document.getElementsByClassName('card')) {
    cards.push(document.getElementsByClassName('card')[pos])
}

for (let pos in cards) {
    cards[pos].addEventListener('click',GeneralFunction)
}

function GeneralFunction() {
    
}