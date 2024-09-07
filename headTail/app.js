// let head_btn = document.querySelector('#head');
// let tail_btn = document.querySelector('#tail');

let btns = document.querySelectorAll('button');
let result = document.querySelector('.result');


// btns[0].addEventListener('click', flipCoin);
// btns[1].addEventListener('click', flipCoin);

for(let t of btns){
    // console.log("hello")
    // t.addEventListener("click", ()=>flipCoin(t));
    
    t.addEventListener("click", flipCoin)
}

// addEventListener(evetn, flipCoin){


//     flipCoin(eventDetails)
// }
 
let user_score = 0
let computer_score = 0

function flipCoin(eventDetails) {
    let selectedElement = eventDetails.target
    // <button id="head">Head</button>
    let userSelection = selectedElement.innerText
    console.log(userSelection)
    // console.log('flip coin');

    // internal Toss
    let possibleValues = ['head', 'tail'];
    let randomIndex = parseInt(Math.random() * possibleValues.length);
     // randomly seletced value
    let tossValue = possibleValues[randomIndex];


     console.log(tossValue)
    if(userSelection.toLowerCase() == tossValue){
        // console.log("User wins")
        user_score++
    }
    else{
        // console.log("Computer Wins")
        computer_score++
    }
    
    result.innerHTML = `User: ${user_score} | Computer: ${computer_score}`

}