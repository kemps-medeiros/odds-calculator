let div = document.getElementById('principal')

let buttonCashOutForBack = document.getElementById('cash-out-for-back')
let buttonCashOutForLay = document.getElementById('cash-out-for-lay')

let form = document.getElementById('form')

let formCashOutForBackIsActive = false;
let formCashOutForLayIsActive = false;

let factorOddsOuts = []

for (let i = 0; i < 100; i++) {
    factorOddsOuts[0] = -0.50
    factorOddsOuts[i] = factorOddsOuts[i - 1] + 0.01
}

let factorOddOutsLay = [];

for (let i = 0; i < 100; i++) {
    factorOddOutsLay[0] = -5;
    factorOddOutsLay[i] = factorOddOutsLay[i - 1] + 0.1;
}


buttonCashOutForBack.onclick = openFormCashOutForBack

buttonCashOutForLay.onclick = openFormCashOutForLay


function calculateCashOutForBack() {
    let odd_back = document.getElementById('odd_back').value
    let stake = document.getElementById('stake').value
    let result = []
    for (let i = 0; i < factorOddsOuts.length; i++) {
        let OddLay = odd_back - factorOddsOuts[i]
        let backerStake = cashOutBetBack(odd_back, OddLay, stake)
        let profit = backerStake - stake
        result.push({
            oddOut: OddLay.toFixed(2),
            backerStake: backerStake.toFixed(2),
            profit: profit.toFixed(2)
        })
    }

    if (result.length > 0) {
        form.innerHTML += `      <table class='striped'>
        <thead>
          <tr>
              <th>Backer's Odd</th>
              <th>Backer Stake</th>
              <th>Profit</th>
          </tr>
        </thead>

        <tbody id='table-data'>`

        let tableBody = document.getElementById('table-data')

        for (let i = 0; i < result.length; i++) {
            tableBody.innerHTML += `
               <tr>
                 <td>${result[i].oddOut}</td>
                 <td>${result[i].backerStake}</td>
                 <td id='${i}'>${result[i].profit}</td>
               </tr>
            `

            let currentTd = document.getElementById(i)

            changeColorByProfit(result[i].profit, currentTd)

        }

        form.innerHTML += `</tbody>
                             </table>`
    }

    // return console.log(result)
}

function changeColorByProfit(profit, currentTd) {
    if (profit < 0) {
        currentTd.style.color = "#ca6567"
    }
    if (profit > 0) {
        currentTd.style.color = "#008000"
    }
}

function cashOutBetBack(oddBack, oddLay, stake) {
    return ((oddBack / oddLay) * stake)
}

function cashOutBetLay(oddLay, oddBack, backerStake) {
    return ((oddLay / oddBack) * backerStake)
}

function calculateCashOutForLay() {
    let odd_lay = document.getElementById('odd_lay').value
    let backer_stake = document.getElementById('backer_stake').value
    let result = []
    for (let i = 0; i < factorOddOutsLay.length; i++) {
        let OddBack = odd_lay + factorOddOutsLay[i]
        let stake = cashOutBetLay(odd_lay, OddBack, backer_stake)
        // let profit = stake - stake
        result.push({
            oddOut: OddBack,
            stake: stake,
            // profit: profit.toFixed(2)
        })
    }
    console.log(result)
    console.log(typeof odd_lay)

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
        form.innerHTML = '';
    }
}

function openFormCashOutForLay() {
    formCashOutForLayIsActive = !formCashOutForLayIsActive
    if (formCashOutForLayIsActive === true) {
        form.innerHTML += `<h3>Cash Out for Lay</h3>`;
        form.innerHTML += `<div class='row'>
        <form class='col s12'>
            <div class='input-field col s4'>
                <input placeholder='Lay Odd' id='odd_lay' type='number' class='validate'>
                <!-- <label for='first_name'>First Name</label> -->
            </div>
            <div class='input-field col s4'>
                <input placeholder='Backer Stake' id='backer_stake' type='number' class='validate'>
                <!-- <label for='first_name'>First Name</label> -->
            </div>
            <div class='input-field col s4 center'>
                <a onclick='calculateCashOutForLay()' class="waves-effect waves-light btn-large">Calculate</a>
            </div>
        </form>
    </div>`;

    } else {
        form.innerHTML = '';
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