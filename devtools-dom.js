// Example 10: Multiple Event Listeners
var button = document.getElementById('multi-event-button');

button.addEventListener('click', function() {
    console.log('Click event!');
});

button.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
