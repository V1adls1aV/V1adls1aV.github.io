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
    console.log("open card")
    
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
    console.log("close card")

    card.classList.remove("opened-card")
    document.body.classList.remove("overlay")
}


// Manage form
function openForm(e) {
    console.log("Open it")

    if (e) {
        e.stopPropagation()
    }

    form.classList.add("opened-form")
    document.body.classList.add("overlay")
    
    document.addEventListener('click', function closeOnClickOutside(e) {
        if (!form.contains(e.target)) {
            closeForm()
            document.removeEventListener('click', closeOnClickOutside)
        }
    })
}

function closeForm() {
    console.log("close it")

    form.classList.remove("opened-form")
    document.body.classList.remove("overlay")
}
