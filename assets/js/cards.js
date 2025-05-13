const cards = document.getElementsByClassName("card")
let openedCard = null;

Array.from(cards).forEach(card => {
    card.addEventListener('click', () => openCard(card));
})

function openCard(card) {
    if (openedCard) closeCard(openedCard);

    card.classList.add("opened-card");
    document.body.classList.add("overlay");
    openedCard = card;
}

function closeCard() {
    openedCard.classList.remove("opened-card");
    document.body.classList.remove("overlay");
    openedCard = null;
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
    openCard(card.previousElementSibling);
}

function switchToRight(card) {
    openCard(card.nextElementSibling);
}
