let bill = 0
let tip_percentage = 5
let number_of_people = 0
let total_amount_person = 0
let tip_amount_person = 0
let flag_bill = false;
let flag_tip = false;
let flag_people = false;
let resetEl = document.getElementById('reset');
let tip_span = document.getElementById('tip-amount');
let total_span = document.getElementById('total-amount');
let bill_input_El = document.getElementById('bill-input');
let tip_input_El_radio = document.getElementsByName('tip-radio')
let tip_input_El_number = document.getElementById('custom')
let number_of_ppl_input = document.getElementById('ppl-input')
let errorEl = document.getElementById('error-ppl-input');
number_of_ppl_input.value = 0;
bill_input_El.value = 0
tip_input_El_number.value = 0
resetEl.addEventListener('click',() =>
    {
        document.getElementById('5').checked = true;
        tip_input_El_number.value = 0;
        number_of_ppl_input.value = 0;
        bill_input_El.value = 0
    flag_bill = false;
    flag_people = false;
    flag_tip = false;
    tip_span.innerText = '0.00';
    total_span.innerText = "0.00";
    bill = 0
    tip_amount_person = 0
    tip_percentage = 5
    tip_amount_person = 0
    number_of_people = 0
})
tip_input_El_number.addEventListener("input", () => {
    flag_tip = true;
    tip_percentage = tip_input_El_number.value;
    // Uncheck all radio buttons
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
    tip_display();
});
tip_input_El_number.addEventListener('click',()=>
{
    if(tip_input_El_number.value == 0)
    {
        tip_input_El_number.value = ''
    }
    
}
)
bill_input_El.addEventListener('click' , () =>
{
    if(bill_input_El.value==0)
    {
        bill_input_El.value = ''
    }
})
number_of_ppl_input.addEventListener('click',()=>
{
    if(number_of_ppl_input.value==0)
    {
        number_of_ppl_input.value = ''
    }
})
// Assuming tip_input_El_radio is a NodeList of your radio buttons
tip_input_El_radio.forEach(radio => {
    radio.addEventListener('change', (event) => {
        if(event.target.checked) {
            flag_tip = true;
            // Perform your actions here, for example:
            tip_percentage = event.target.id;
        }
        tip_display();
    });
});
number_of_ppl_input.addEventListener('input' , () =>
{
    if(number_of_ppl_input.value != 0 || number_of_ppl_input.value != '')
    {
        flag_people = true;
        errorEl.style.display = 'none'
        number_of_people = number_of_ppl_input.value
    }
    else
    {
        flag_people = false;
            errorEl.style.display = 'block';
    }   
    tip_display();
})
bill_input_El.addEventListener('input', () =>
{
    if(bill_input_El.value== 0 || bill_input_El.value == '')
    {
        flag_bill = false;
    }
    else
    {
        flag_bill = true;
    }
    bill = bill_input_El.value;
    tip_display();
})
function tip_display ()
{
    if(!flag_bill || !flag_people)
        {
}
else{
    tip_calculator();
}
}

function tip_calculator()
{
    let tip = bill*(tip_percentage/100)
    tip_amount_person = (tip / number_of_people).toFixed(2)
    let totalAmount = parseInt(bill) + tip
    console.log(totalAmount)
    total_amount_person = (totalAmount / parseInt(number_of_people)).toFixed(2)
    tip_span.innerText = tip_amount_person;
    total_span.innerText = total_amount_person
}