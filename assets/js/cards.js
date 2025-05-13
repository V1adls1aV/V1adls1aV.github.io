const cards = document.getElementsByClassName("card")

Array.from(cards).forEach(card => {
    card._openCallback = function openOnClick() {
        card.removeEventListener("click", openOnClick);
        delete card._openCallback;
        openCard(card);
    };
    card.addEventListener("click", card._openCallback);
})

// Manage cards
function openCard(card) {
    console.log("Open card")
    console.log(card)

    card.classList.add("opened-card");
    document.body.classList.add("overlay");

    // Create a custom property to manage closing independently of the method from which I want to close it
    card._closeCallback = function closeOnClickOutside(e) {
        if (!card.contains(e.target)) {
            document.removeEventListener("click", closeOnClickOutside);
            delete card._closeCallback;
            closeCard(card);
        }
    }

    document.addEventListener("click", card._closeCallback);
}

function closeCard(card) {
    console.log("Close card")
    console.log(card)

    document.body.classList.remove("overlay");
    card.classList.remove("opened-card");

    // Cleanup event listener and the card field
    document.removeEventListener('click', card._closeCallback);
    delete card._closeCallback;

    // Add open callback again.
    card._openCallback = function openOnClick() {
        card.removeEventListener("click", openOnClick);
        delete card._openCallback;
        openCard(card);
    };
    card.addEventListener("click", card._openCallback);
}

// Manage switching between cards
const leftSwitches = document.getElementsByClassName("left-switch");
const rightSwitches = document.getElementsByClassName("right-switch");

Array.from(leftSwitches).forEach(leftSwitch => {
    leftSwitch.addEventListener('click', () => {
        switchToLeft(leftSwitch.closest(".card"));
    })
})

Array.from(rightSwitches).forEach(rightSwitch => {
    rightSwitch.addEventListener('click', () => {
        switchToRight(rightSwitch.closest(".card"));
    })
})

function switchToLeft(card) {
    let newCard = card.previousElementSibling;
    replaceCardWith(card, newCard);
}

function switchToRight(card) {
    let newCard = card.nextElementSibling;
    replaceCardWith(card, newCard);
}

function replaceCardWith(currentCard, newCard) {
    closeCard(currentCard);
    // openCard(newCard);
}