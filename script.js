
function updateCurrentTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

updateCurrentTime();

// Update every 1 second (1000ms) to reflect current time
setInterval(updateCurrentTime, 1000);
