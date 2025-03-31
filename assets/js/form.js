const formLinks = document.getElementsByClassName("form-button")
const form = document.getElementById("form")

Array.from(formLinks).forEach(anchor => {
    anchor.addEventListener('click', (e) => openForm(e))
})

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
