/* Standard Calculator */

var input_array = ['']; //empty string array to place the input button values
var input_index = 0; //used as an pointer for the button input array

$(document).ready(function () {
    //Click handler for numbers button and calls store number function
    $('.numbers').click(function () {
        console.log(($(this).text()));
        store_number($(this).text());  //Clicked number button value is passed through the store_number function
    });

    //Click handler for operators button and calls store operator function
    $('.operators').click(function() {
        store_operator($(this).text()); //Clicked operators button value is passed through the store_number function
    });

    //Click handler for clear all button
    $('.clear').click(function(){
        clear_all(); //clear all function called when clear button is clicked
    });

    //Click handler for clear entry button
    $('.clear_entry').click(function(){
        clear_entry();
    });

    //Click handler for equal button. Switch case processes which operand and calculates
    $('.equal').click(function(){
        calculate(); //calculate function called when equal button is clicked
    });
});

//Function to store the numbers button value to the input array
function store_number(button_value){
    //Conditional to avoid last value in the array is a decimal point and the next value is a decimal point
    if(input_array[input_index][input_array[input_index].length - 1] === '.' && button_value === '.') {
    if(input_array[input_index - 1] >= 0) {
        input_array[input_index - 1] = button_value;
    }
    }
    //No decimal will add the number to the array based on the input index
    else{
       input_array[input_index] += button_value;
    }
    update_display(); //displays the value on the calculator screen
    console.log(input_array);
}

//Function to store the operator button value to the input array
function store_operator(button_value) {
    //Conditional that checks if it's the first index of the input array
    if(input_index === 0 && input_array[input_index] === '') {
    if(button_value == '-') {
       input_array[input_index] = 0;
       input_index++;
       input_array[input_index] = '-';
       input_index++;
       input_array[input_index] = '';

    }
       console.log('store operator condition');
       return;
    }
    //Conditional that checks if a operator button was already pressed
    if((input_array[input_index - 1]) && input_array[input_index] === '') {
        input_array[input_index - 1] = button_value; //switches the current operator with a new operator
    }
    else{
        input_index++;
        input_array[input_index] = button_value;
        input_index++;
        input_array[input_index] = '';
    }
    update_display();
}

//Function calculates the 2 number values based on the operator
function calculate() {

    switch(input_array[1]) {
        case '+': //Add the two numbers when the operator is +
            total = parseFloat(input_array[0]) + parseFloat(input_array[2]);
            console.log(total);
            store_caculation(total);
            break;
        case '-': //Subtract the two numbers when the operator is -
            total = parseFloat(input_array[0]) - parseFloat(input_array[2]);
            console.log(total);
            store_caculation(total);
            break;
        case 'x': //Multiply the two numbers when the operator is x
            total= parseFloat(input_array[0]) * parseFloat(input_array[2]);
            console.log(total);
            store_caculation(total);
            break;
        case '/': //Divide the two numbers when the operator is /
            total = parseFloat(input_array[0]) / parseFloat(input_array[2]);
            console.log(total);
            store_caculation(total);
            break;
    }
}

//Function to store the calculated total and clear input_storage array and storage_index
function store_caculation(total){
    console.log('store operator button_value', total);
    input_array = ['']; //set input_storage to an empty string array
    input_index = 0; //set storage_index back to 0
    input_array[input_index]+=total; //add total into the input array
    console.log('input array = ', input_array);
    update_display(); //shows button value on the display screen
}

//Function shows button value on the display screen of the calculator
function update_display(){
    var output = '';
    for(var i=0; i<input_array.length; i++){
        output = output + input_array[i];
    }
    $('.display_screen').text(output);
}

//Function to clear all in the array and set array and index to their starting value
function clear_all(){
    input_array = ['']; //sets input_array back to an empty string array
    input_index = 0; //set input_index to zero
    console.log('input array after clear all: ', input_array);
    $('.display_screen').text(''); //clears the display screen
}

//Function to clear current entry in the array
function clear_entry(){
    if(input_array[input_index] === '' && input_index  > 0) {
       input_index--;
    }
    input_array[input_index] = '';
    console.log('input array after clear: ', input_array);
    update_display(); //displays the current values within the array on the calculator screen
}



