var button_input_array = [''];
var array_input_index = 0;
$(document).ready(function () {
    //Click handler for numbers button and calls store number function.
    $('.numbers').click(function () {
        console.log('number clicked: ', this);
        store_number($(this).text());
    });

    //Click handler for operators button and calls store operator function.
    $('.operators').click(function() {
        console.log('operator button clicked: ', this);
        store_operator($(this).text());
    });

    //Click handler for clear all button.
    $('.clear_all').click(function(){
        console.log('clear all button clicked: ', this);
        clear_all();
    });
    $('.clear').click(function(){
        console.log('cler button clicked: ', this);
        clear();
    });
    //Click handler for equal button. Switch case processes which operand and calculates.
    $('.equal').click(function(){
       console.log('equal button clicked');
       calculate();
       $('.display_screen').text(result);
    });
});

//Function to store the numbers button value to the input array
function store_number(button_value){
        console.log('store number button_value ', button_value);
        button_input_array[array_input_index] += button_value; //Stores number button value into the input array
        //array_input_index++; //increments the input_index value
        //button_input_array[array_input_index]='';
        console.log('input storage: ', button_input_array);
        update_display();
}

//Function to store the operator button value to the input array
function store_operator(button_value){
    console.log('store operator button_value',button_value);
    array_input_index++; //increments the input_index value
    button_input_array[array_input_index]=button_value; //Stores operator value into the input array
    array_input_index++; //increments the input_index value
    button_input_array[array_input_index]=''; //adds empty string to the input_array
    console.log('input storage = ', button_input_array);
    update_display(); //shows button value on the display screen
}

//Function to store the calculated total and clear input_storage array and storage_index
function store_caculation(result){
    console.log('store operator button_value', result);
    button_input_array = ['']; //set input_storage to an empty string array
    array_input_index = 0; //set storage_index back to 0
    button_input_array[array_input_index]+=result; //add result into the input storage array
    console.log('input storage = ', button_input_array);
    update_display(); //shows button value on the display screen
}

//Function to clear all in the array
function clear_all(){
    button_input_array = [''];
    array_input_index = 0;
    console.log("input array after clear all: ", button_input_array);
    $('.display_screen').text('');
}
/*function clear(){
    button_input_array.pop();
    array_input_index--;
    console.log("input array after clear: ", input_array);
    update_display();
}*/

//Function shows button value on the display screen of the calculator
function update_display(){
    var output = '';
    var total = '';
    for(var i=0; i<button_input_array.length; i++){
        output = output + button_input_array[i];
    }
    $('.display_screen').text(output);
}

function calculate(){
    switch(button_input_array[1]) {
        case '+':
            result = parseFloat(button_input_array[0]) + parseFloat(button_input_array[2]);
            console.log(result);
            store_caculation(result);
            break;
        case '-':
            result = parseFloat(button_input_array[0]) - parseFloat(button_input_array[2]);
            console.log(result);
            store_caculation(result);
            break;
        case 'x':
            result = parseFloat(button_input_array[0]) * parseFloat(button_input_array[2]);
            console.log(result);
            store_caculation(result);
            break;
        case '/':
            result = parseFloat(button_input_array[0]) / parseFloat(button_input_array[2]);
            console.log(result);
            store_caculation(result);
            break;
    }
}







