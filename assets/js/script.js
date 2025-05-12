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


// Manage form
function openForm(e) {
    if (e) {
        e.stopPropagation()
    }

    form.classList.add("opened-pop-up")
    document.body.classList.add("overlay")
    
    document.addEventListener('click', function closeOnClickOutside(e) {
        if (!form.contains(e.target)) {
            closeForm()
            document.removeEventListener('click', closeOnClickOutside)
        }
    })
}

function closeForm() {
    form.classList.remove("opened-pop-up")
    document.body.classList.remove("overlay")
}
