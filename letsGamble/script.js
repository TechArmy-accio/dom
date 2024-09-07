let players = document.querySelectorAll('input'); // [input, input, input, input, input]

let diceBtns = document.querySelectorAll('.dice-btn');

let scoreSpan = document.querySelectorAll('span');

let result = document.querySelector('#result');
let decideBtn = document.querySelector('#admin');

decideBtn.disabled = true

for(let t of diceBtns){
    t.addEventListener("click", dicePlayLogic)
}

let count = 0
function dicePlayLogic(e){
//    console.log(e.target)

// enable decide button
 count++ 
 if(count == 5){
        decideBtn.disabled = false
 }

 // disable the Roll the dice button
 let selectedBtn = e.target
 // disable the button
 selectedBtn.disabled = true 


   let clickedBtn = e.target.id.slice(3) // position
   let clickedIndex = clickedBtn - 1 // index

//    console.log(clickedBtn)

   let possibleValues = [1,2,3,4,5,6]

   let randomIndex = Math.floor(Math.random() * possibleValues.length)

   let randomValue = possibleValues[randomIndex]

   // jetha willl always get 6
   if(clickedIndex == 0){
      randomValue = 6
   }

//    console.log(clickedIndex,randomValue)
   scoreSpan[clickedIndex].innerText = randomValue
   }


   // decide btn: 


   decideBtn.addEventListener("click", decideWinner)


   function decideWinner(){
      let highestScore = 0

      for(let t of scoreSpan){ //[<span>1</span>, <span>5</span>, <span>3</span>, <span>4</span>, <span>5</span>]
          let v = t.innerText
          if(v>highestScore){
              highestScore = v
          }
      }
    //   console.log(highestScore)
   let winnerIndex = []
    for(let i = 0; i<=scoreSpan.length-1; i++){
        let v = scoreSpan[i].innerText
        if(v == highestScore){
            winnerIndex.push(i)
        }
    }
    let winnerArr = [] // [1,4]
    for(let t of winnerIndex){
        let name = players[t].value
        winnerArr.push(name)
    }

    result.innerText = `The winner is ${winnerArr.join(" , ")}`
   }


















   // btn1, btn2, btn3, btn4, btn500

//    let str = "btn100"

//    str.slice(3)

   // btn1 => 1