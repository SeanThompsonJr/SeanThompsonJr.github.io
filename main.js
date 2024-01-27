//the product number input
let input = document.getElementById("pro-num");
let buttons = document.querySelectorAll("button");

//function for getting the input text
input.addEventListener('input', function(event) {
    var inputValue = event.target.value;
    buttons.forEach(function(button) {
        if (button.value === inputValue) {
            button.style.backgroundColor = 'red'; // change to the color you want
        } else {
            button.style.backgroundColor = ''; // reset other buttons
        }
    });
});



/*input.addEventListener('input', function(event) {
    var inputValue = event.target.value;
    buttons.forEach(function(button) {
        if (button.value === inputValue) {
            switch(inputValue) {
                case '123':
                    button.style.backgroundColor = 'red';
                    break;
                case '900':
                    button.style.backgroundColor = 'blue';
                    break;
                default:
                    button.style.backgroundColor = 'green';
                    break;
            }
        } else {
            button.style.backgroundColor = ''; // reset other buttons
        }
    });
}); */