const cards = document.getElementsByClassName("card")

Array.from(cards).forEach(card => {
    card.addEventListener('click', () => openCard(card))
})

function openCard(card) {
    card.classList.add("opened-card")
    document.body.classList.add("card-opened")
    
    document.addEventListener('click', function closeOnClickOutside(e) {
        if (!card.contains(e.target)) {
            closeCard(card)
            document.removeEventListener('click', closeOnClickOutside)
        }
    })
}

function closeCard(card) {
    card.classList.remove("opened-card")
    document.body.classList.remove("card-opened")
}
