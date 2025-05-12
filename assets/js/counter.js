const targetDate = new Date('2025-06-21T00:00:00+03:00');

function updateCounter() {
    const now = new Date();
    const timeDifference = targetDate - now;
    const counterElement = document.getElementById("counter");

    if (timeDifference < 0) {
        if (counterElement) {
            counterElement.textContent = "Event has started!";
        }
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (counterElement) {
        counterElement.textContent = `${days} days ${hours}h`;
    }
}

updateCounter();
setInterval(updateCounter, 1000);
