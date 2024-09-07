
let amount_box = document.querySelector("input")
let tip_btns = document.querySelector("button")
let output = document.querySelector(".output")
console.log("hello")
// events: 
console.log(amount_box.value)
// popular events: 

// click 

// submit 

// keydown, keyup, keypress


// change, input, focus, blur, 

// addEventListerner

// tip_btns.addEventListener("click", caluclateTip)


function caluclateTip(){
   let amt = amount_box.value  // string 
   console.log(amt)

//    console.log(amt*5/100)

  let tip = amt*5/100

  if(tip>50){
    tip = 50
  }

   output.innerHTML = `Tip amount is: ${tip}`
}