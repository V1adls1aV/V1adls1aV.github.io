const cards = document.getElementsByClassName("card")

Array.from(cards).forEach(card => {
    card.addEventListener('click', () => openCard(card));
})

// Manage cards
function openCard(card) {
    card.classList.add("opened-card")
    document.body.classList.add("overlay")

    document.addEventListener('click', function closeOnClickOutside(e) {
        if (!card.contains(e.target)) {
            closeCard(card);
            document.removeEventListener('click', closeOnClickOutside);
        }
    })
}

function closeCard(card) {
    card.classList.remove("opened-card")
    document.body.classList.remove("overlay")
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

function getPreviousElementByClass(element, className) {
    let newElement = element.previousElementSibling;
    while (newElement) {
        if (newElement.classList && newElement.classList.contains(className)) {
            return newElement;
        }
        newElement = newElement.previousElementSibling;
    }
    return null;
}

function getNextElementByClass(element, className) {
    let newElement = element.nextElementSibling;
    while (newElement) {
        if (newElement.classList && newElement.classList.contains(className)) {
            return newElement;
        }
        newElement = newElement.nextElementSibling;
    }
    return null;
}


function switchToLeft(card) {
    let newCard = getPreviousElementByClass(card, "card")
    replaceCardWith(card, newCard);
}

function switchToRight(card) {
    let newCard = getNextElementByClass(card, "card");
    replaceCardWith(card, newCard);
}

function replaceCardWith(currentCard, newCard) {
    currentCard.classList.remove("opened-card")
    newCard.classList.add("opened-card")

    document.addEventListener('click', function closeOnClickOutside(e) {
        if (!newCard.contains(e.target)) {
            closeCard(newCard);
            document.removeEventListener('click', closeOnClickOutside);
        }
    })
}
