const cards = document.getElementsByClassName("card")

Array.from(cards).forEach(card => {
    card.addEventListener('click', () => openCard(card));
})

function buildCloseCallback(card) {
    return (
        function closeOnClickOutside(e) {
            if (!card.contains(e.target)) {
                closeCard(card);
            }
        }
    )
}

// Manage cards
function openCard(card) {
    card.classList.add("opened-card");
    document.body.classList.add("overlay");

    document.addEventListener('click', buildCloseCallback(card));
}

function closeCard(card) {
    card.classList.remove("opened-card");
    document.body.classList.remove("overlay");

    document.removeEventListener('click', buildCloseCallback(card));
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
    openCard(newCard);
}
