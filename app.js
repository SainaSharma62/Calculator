const result = document.getElementById('result');
const clear = document.getElementById('clear');
const buttons = document.querySelectorAll('input[type ="button"]');

let calculation = '';

function updatevalue(){
    result.value = calculation;
}

function btnclick(event){
    const btnvalue = event.target.value;

    if(btnvalue === '='){
        calculation = eval(calculation);
    }else if(calculation === 'C'){
        calculation = '';
    }else{
        calculation += btnvalue;
    }

    updatevalue();
}

buttons.forEach(button =>{
    button.addEventListener('click',btnclick);
});

clear.addEventListener('click',() =>{
    calculation = '';
    updatevalue();
});


