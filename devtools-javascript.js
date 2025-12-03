// Example 1: Buggy Calculator
document.getElementById('add-button').addEventListener('click', function() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    // BUG: This concatenates strings instead of adding numbers
    var sum = num1 + num2;

    document.getElementById('result').textContent = sum;
});

// Example 2: Event Listener
var clickCount = 0;
document.getElementById('event-button').addEventListener('click', function() {
    clickCount++;
    document.getElementById('click-count').textContent = clickCount;
});

// Example 3: Watch Expressions
var petStats = {
    health: 100,
    energy: 50
};

document.getElementById('feed-pet').addEventListener('click', function() {
    petStats.health = Math.min(petStats.health + 20, 100);
    petStats.energy = Math.max(petStats.energy - 5, 0);
    updateStats();
});

document.getElementById('exercise-pet').addEventListener('click', function() {
    petStats.energy = Math.max(petStats.energy - 20, 0);
    petStats.health = Math.min(petStats.health + 5, 100);
    updateStats();
});

function updateStats() {
    document.getElementById('pet-health').textContent = petStats.health;
    document.getElementById('pet-energy').textContent = petStats.energy;
}

// Example 4: Console Testing
function testFunction() {
    console.log('Test function called!');
    return { message: 'Hello from console', value: 42 };
}

document.getElementById('console-button').addEventListener('click', function() {
    testFunction();
});
