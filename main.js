var input_storage = [''];
var storage_index = 0;
$(document).ready(function () {
    //Click handler for numbers button and calls store number function.
    $('.buttons > #numbers').click(function () {
        console.log('this is ', this);
        store_number($(this).text());
    });

    //Click handler for operators button and calls store operator function.
    $('.buttons > #operators').click(function() {
        console.log('operator button clicked');
        store_operator($(this).text());
    });

    //Click handler for equal button. Switch case processes which operand and calculates.
    $('.buttons > #equal').click(function(){
       console.log('equal button clicked');
        /*calculation();
        switch(input_storage[1]) {
           case '+':
               result = parseFloat(input_storage[0]) + parseFloat(input_storage[2]);
               console.log(result);
               store_caculation(result);
               break;
           case '-':
               result = parseFloat(input_storage[0]) - parseFloat(input_storage[2]);
               console.log(result);
               break;
           case 'x':
               result = parseFloat(input_storage[0]) * parseFloat(input_storage[2]);
               console.log(result);
               break;
           case '/':
               result = parseFloat(input_storage[0]) / parseFloat(input_storage[2]);
               console.log(result);
               break;
       }
           $('.display_screen').text(result);*/
    });
});

//Function to store the numbers button value to the input storage array
function store_number(button_value){
    console.log('store number button_value ',button_value);
    input_storage[storage_index]+=button_value; //Stores number button value into the input storage array
    console.log('input storage: ',input_storage);
    update_display();
}

//Function to store the operator button value to the input storage array
function store_operator(button_value){
    console.log('store operator button_value',button_value);
    storage_index++; //increments the storage_index variable
    input_storage[storage_index]=button_value; //Stores operator value into the input storage array
    storage_index++; //increments the storage_index variable
    input_storage[storage_index]=''; //adds empty string to the input_storage array
    console.log('input storage = ',input_storage);
    update_display();
}
function store_caculation(result){
    console.log('store operator button_value', result);
    input_storage = [''];
    storage_index = 0;
    input_storage[storage_index]+=result;
    console.log('input storage = ',input_storage);
    update_display();
}
function calculation(button_value){
    for(i=0; i < input_storage.length; i++)
    {
        if((input_storage[i] === "+") || (input_storage[i] === "-")){

        }


    }
}

//Shows the buttons values on the display screen
function update_display(){
    var output = '';
    var total = '';
    for(var i=0; i<input_storage.length; i++){
       // output+=input_storage[i];
        output = output + input_storage[i];
    }
    $('.display_screen').text(output);
}






