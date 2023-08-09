
let input = document.getElementById('inputbox');
let buttons= document.querySelectorAll('.button');


function display(number){
    input.value += number;
}
function calculate(){
    var final_number = input.value;
    var final_result= eval(final_number);
    input.value = final_result
}
function clr(){
    input.value=" ";
}

function del(){
    input.value= input.value.slice(0, -1);
}