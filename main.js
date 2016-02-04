var input_array = [''];
var input_index = 0;
$(document).ready(function () {
    //Click handler for numbers button and calls store number function.
    $('.buttons > #numbers').click(function () {
        console.log('number clicked: ', this);
        store_number($(this).text());
    });

    //Click handler for operators button and calls store operator function.
    $('.buttons > #operators').click(function() {
        console.log('operator button clicked: ', this);
        store_operator($(this).text());
    });

    //Click handler for clear all button.
    $('.buttons > #clear_all').click(function(){
        console.log('clear all button clicked: ', this);
        clear_all_calc();
    });

    //Click handler for clear button.
    $('.buttons > #clear').click(function(){
       console.log('clear button clicked: ', this);
        clear_current();
    });
    //Click handler for equal button. Switch case processes which operand and calculates.
    $('.buttons > #equal').click(function(){
       console.log('equal button clicked');
        switch(input_array[1]) {
           case '+':
               result = parseFloat(input_array[0]) + parseFloat(input_array[2]);
               console.log(result);
               store_caculation(result);
               break;
           case '-':
               result = parseFloat(input_array[0]) - parseFloat(input_array[2]);
               console.log(result);
               store_caculation(result);
               break;
           case 'x':
               result = parseFloat(input_array[0]) * parseFloat(input_array[2]);
               console.log(result);
               store_caculation(result);
               break;
           case '/':
               result = parseFloat(input_array[0]) / parseFloat(input_array[2]);
               console.log(result);
               store_caculation(result);
               break;
       }
           $('.display_screen').text(result);
    });
});

//Function to store the numbers button value to the input array
function store_number(button_value){
    console.log('store number button_value ',button_value);
    input_array[input_index]+=button_value; //Stores number button value into the input array
    console.log('input storage: ',input_array);
    update_display();
}

//Function to store the operator button value to the input array
function store_operator(button_value){
    console.log('store operator button_value',button_value);
    input_index++; //increments the input_index value
    input_array[input_index]=button_value; //Stores operator value into the input array
    input_index++; //increments the input_index value
    input_array[input_index]=''; //adds empty string to the input_array
    console.log('input storage = ',input_array);
    update_display(); //shows button value on the display screen
}

//Function to store the calculated total and clear input_storage array and storage_index
function store_caculation(result){
    console.log('store operator button_value', result);
    input_array = ['']; //set input_storage to an empty string array
    input_index = 0; //set storage_index back to 0
    input_array[input_index]+=result; //add result into the input storage array
    console.log('input array = ',input_array);
    update_display(); //shows button value on the display screen
}

//Function to clear all in the array
function clear_all_calc(){
    input_array = [''];
    input_index = 0;
    console.log("input array: ", input_array);
    console.log("input index: ", input_index);
    $('.display_screen').text('');
}

//Function to clear current input in the array
function clear_current(button_value){

}

//Function shows button value on the display screen of the calculator
function update_display(){
    var output = '';
    var total = '';
    for(var i=0; i<input_array.length; i++){
        output = output + input_array[i];
    }
    $('.display_screen').text(output);
}






