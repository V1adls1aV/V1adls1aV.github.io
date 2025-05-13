const cards = document.getElementsByClassName("card")

Array.from(cards).forEach(card => {
    card.addEventListener('click', (e) => openCard(card, e));
})

// Manage cards
function openCard(card, e) {
    // Prevent open/closing the card
    if (e) {
        e.stopPropagation();
    }

    card.classList.add("opened-card");
    document.body.classList.add("overlay");

    // Create a custom property to manage closing independently of the method from which I want to close it
    card._closeCallback = function closeOnClickOutside(e) {
        if (!card.contains(e.target)) {
            closeCard(card, e);
        }
    }
    document.addEventListener('click', card._closeCallback);

    // Choose which arrow not to show
    if (!card.previousElementSibling) card.querySelector(".left-switch").style.display = "none";
    if (!card.nextElementSibling) card.querySelector(".right-switch").style.display = "none";
}

function closeCard(card, e) {
    // Prevent open/closing the card
    if (e) {
        e.stopPropagation();
    }

    card.classList.remove("opened-card");
    document.body.classList.remove("overlay");

    // Cleanup event listener and the card field
    document.removeEventListener('click', card._closeCallback);
    delete card._closeCallback;
}

// Manage switching between cards
const leftSwitches = document.getElementsByClassName("left-switch");
const rightSwitches = document.getElementsByClassName("right-switch");

Array.from(leftSwitches).forEach(leftSwitch => {
    leftSwitch.addEventListener('click', (e) => {
        switchToLeft(leftSwitch.closest(".card"), e);
    })
})

Array.from(rightSwitches).forEach(rightSwitch => {
    rightSwitch.addEventListener('click', (e) => {
        switchToRight(rightSwitch.closest(".card"), e);
    })
})

function switchToLeft(card, e) {
    let newCard = card.previousElementSibling;
    replaceCardWith(card, newCard, e);
}

function switchToRight(card, e) {
    let newCard = card.nextElementSibling;
    replaceCardWith(card, newCard, e);
}

function replaceCardWith(currentCard, newCard, e) {
    closeCard(currentCard, e);
    openCard(newCard, e);
}
