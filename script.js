$(function() {
    checkAndUpdatePetInfoInHtml();

    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.bath-button').click(clickedBathButton);
})

// Pet information object with keys "name", "weight", "happiness"
var pet_info = {
    name: "Buddy",
    weight: 25,
    happiness: 50,
    cleanliness: 100
};

// Array of pet responses for visual notifications
var petResponses = {
    treat: ["Yum! That was delicious!", "More treats please!", "Nom nom nom!"],
    play: ["Woof woof! That was fun!", "Let's play again!", "I love playing with you!"],
    exercise: ["Phew! Good workout!", "I'm getting tired...", "Running is hard work!"],
    bath: ["I'm so clean now!", "I hate baths but I feel fresh!", "All sparkly and clean!"]
};

// Treat button - increases happiness and weight
function clickedTreatButton() {
    pet_info.happiness += 10;
    pet_info.weight += 5;
    pet_info.cleanliness -= 5;

    showPetMessage(getRandomResponse('treat'));
    checkAndUpdatePetInfoInHtml();
}

// Play button - increases happiness and decreases weight
function clickedPlayButton() {
    pet_info.happiness += 15;
    pet_info.weight -= 3;
    pet_info.cleanliness -= 10;

    showPetMessage(getRandomResponse('play'));
    checkAndUpdatePetInfoInHtml();
}

// Exercise button - decreases happiness and weight
function clickedExerciseButton() {
    pet_info.happiness -= 5;
    pet_info.weight -= 8;
    pet_info.cleanliness -= 15;

    showPetMessage(getRandomResponse('exercise'));
    checkAndUpdatePetInfoInHtml();
}

// New action button - Bath button
// New behavior: increases cleanliness, slightly decreases happiness
function clickedBathButton() {
    pet_info.cleanliness = 100;
    pet_info.happiness -= 3;

    showPetMessage(getRandomResponse('bath'));
    checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();
    updatePetInfoInHtml();
    updatePetMood();
}

// Fix to make sure certain key values can't go below zero
function checkWeightAndHappinessBeforeUpdating() {
    if (pet_info.weight < 0) {
        pet_info.weight = 0;
    }
    if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
    }
    if (pet_info.cleanliness < 0) {
        pet_info.cleanliness = 0;
    }
}

function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
    $('.cleanliness').text(pet_info['cleanliness']);
}

// Visual notification - shows pet speech bubble with message
// Does not use console.log() or alert()
function showPetMessage(message) {
    var $speechBubble = $('.pet-speech-bubble');

    // UNIQUE JQUERY METHOD #1: .fadeIn()
    // The fadeIn() method gradually changes the opacity of selected elements from hidden to visible
    // Syntax: $(selector).fadeIn(speed, callback)
    // This creates a smooth appearance animation for the speech bubble
    $speechBubble.text(message).fadeIn(400);

    // UNIQUE JQUERY METHOD #2: .delay()
    // The delay() method sets a timer to delay the execution of subsequent items in the queue
    // Syntax: $(selector).delay(milliseconds)
    // Combined with fadeOut(), this keeps the message visible for 3 seconds before fading away
    $speechBubble.delay(3000).fadeOut(400);
}

// Helper function to get random response from array
function getRandomResponse(action) {
    var responses = petResponses[action];
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Update pet mood animation based on happiness level
function updatePetMood() {
    var $petImage = $('.pet-image');

    // Remove existing mood classes
    $petImage.removeClass('happy unhappy');

    // Add animation based on happiness level
    if (pet_info.happiness >= 70) {
        $petImage.addClass('happy');
    } else if (pet_info.happiness <= 30) {
        $petImage.addClass('unhappy');
    }
}
