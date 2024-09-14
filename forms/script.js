let name_box = document.querySelector('#name');
let email_box = document.querySelector('#email');
let password_box = document.querySelector('#password');
let confirm_password_box = document.querySelector('#confirm_password');
let submit_button = document.querySelector('button');

let form = document.querySelector('form');

let error = document.querySelector('#error');
let success = document.querySelector('#success');


// submit_button.addEventListener("click", validate)


form.addEventListener("submit", validate)

function validate(e) {
    e.preventDefault()
    // console.log("submitting")
    let name = name_box.value;
    let email = email_box.value;
    let password = password_box.value;
    let confirm_password = confirm_password_box.value;
    if(!name || !email || !password || !confirm_password){
        error.innerHTML = "Please fill all fields"
        success.innerHTML = ""
        return
    }
    if(email.includes("@") && email.includes(".") == false){
        error.innerHTML = "Please enter a valid email"
        success.innerHTML = ""
        return
    }
    if(password.length < 4){
        error.innerHTML = "Password must be at least 4 characters"
        success.innerHTML = ""
        return
    }

    if(password !== confirm_password){
        error.innerHTML = "Passwords do not match"
        success.innerHTML = ""
        return
    }

    error.innerHTML = ""
    success.innerHTML = "Form submitted successfully"
}

// change, input
// name_box.addEventListener("change", (e)=>{
// //    console.log(e.target.value)
//   let name = e.target.value
//    if(name.length<4){
//        alert("Name must be at least 4 characters")
//    }
// })

name_box.addEventListener("input", (e)=>{
    //    console.log(e.target.value)
    //   let name_div = document.querySelector('#name-div')

   let currentElement = e.target // name_box

   let name_div = currentElement.parentElement // div

   console.log(name_div)


      let para = document.querySelector("#para") || document.createElement('p')
      para.id = "para"
      // add the para to the div(name_div)
      name_div.append(para)

      let name = e.target.value

       if(name.length<4){
          name_box.style.border = "2px solid red"
          name_box.style.outline = "none"
          para.innerHTML = "Name must be at least 4 characters"
          
       }
       else{
        name_box.style.border = "2px solid green"
        name_box.style.outline = "none"
        para.innerHTML = ""
       }
    })