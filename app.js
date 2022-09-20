let div = document.getElementById('principal')
let buttonCashOutForBack = document.getElementById('cash-out-for-back')

let form = document.getElementById('form')

let formCashOutForBackIsActive = false;

buttonCashOutForBack.onclick = openFormCashOutForBack


function calculateCashOutForBack() {
    let odd_back = document.getElementById('odd_back').value
    let stake = document.getElementById('stake').value
    return console.log(stake)
}

function openFormCashOutForBack() {
    formCashOutForBackIsActive = !formCashOutForBackIsActive
    if (formCashOutForBackIsActive === true) {
        form.innerHTML += `<h3>Cash Out for Back</h3>`
        form.innerHTML += `<div class='row'>
                                <form class='col s12'>
                                    <div class='input-field col s4'>
                                        <input placeholder='Odd de entrada' id='odd_back' type='number' class='validate'>
                                        <!-- <label for='first_name'>First Name</label> -->
                                    </div>
                                    <div class='input-field col s4'>
                                        <input placeholder='Stake' id='stake' type='number' class='validate'>
                                        <!-- <label for='first_name'>First Name</label> -->
                                    </div>
                                    <div class='input-field col s4 center'>
                                        <a onclick='calculateCashOutForBack()' class="waves-effect waves-light btn-large">Calculate</a>
                                    </div>
                                </form>
                            </div>`;


    } else {
        form.innerHTML = ''
    }
}


//-------------------*--------------------

//Criando um elemento
// let title = document.createElement('h1')

// title.textContent = 'Hiii'

// console.log(title)

// div.appendChild(title)
//----------------------*----------------------

//com innerHtml
// div.innerHTML = "<h1>Hello World</h1>"

//--------------------*-------------------