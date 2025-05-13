

const cards = document.getElementsByClassName("card")
const formLinks = document.getElementsByClassName("form-button")
const form = document.getElementById("form")

Array.from(cards).forEach(card => {
    card.addEventListener('click', () => openCard(card))
})

Array.from(formLinks).forEach(anchor => {
    anchor.addEventListener('click', (e) => openForm(e))
})

// Manage cards
function openCard(card) {
    card.classList.add("opened-card")
    document.body.classList.add("overlay")

    document.addEventListener('click', function closeOnClickOutside(e) {
        if (!card.contains(e.target)) {
            closeCard(card)
            document.removeEventListener('click', closeOnClickOutside)
        }
    })
}

function closeCard(card) {
    card.classList.remove("opened-card")
    document.body.classList.remove("overlay")
}

function switchToLeft(card) {

}

function switchToRight(card) {

}

function findCardIndex(card) {
    for (let i = 0; i < cards.length; i++) {

    }
}

function replaceCardWith(currentCard, newCard) {
    currentCard.classList.remove("opened-card")
    newCard.classList.add("opened-card")

    document.addEventListener('click', function closeOnClickOutside(e) {
        if (!card.contains(e.target)) {
            closeCard(newCard)
            document.removeEventListener('click', closeOnClickOutside)
        }
    })
}
