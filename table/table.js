let arr = [
    {id:1 , name:"Abhishek", age:21, city:"Delhi"},
    {id:2 , name:"Rahul", age:22, city:"Mumbai"},
    {id:3 , name:"Rohit", age:23, city:"Bangalore"},
    {id:4 , name:"Raj", age:24, city:"Pune"},
]


let container = document.querySelector(".container");


let myTable = document.createElement("table");
container.append(myTable);


// create table head: 
// let thead1 = document.createElement("thead");
// myTable.append(thead1);


// let thead2 = myTable.createElement("thead")

let thead = myTable.createTHead();
// row inside table head: 

// let tr = document.createElement("tr");
// thead.append(tr);
let tr = thead.insertRow(); // tr

let keys =  Object.keys(arr[0]); // [id, name, age, city]

// add th to first row of table head:
keys.forEach(value=>{
    let th = document.createElement("th")
    th.innerHTML = value[0].toUpperCase() + value.slice(1); // Name
    tr.append(th);
})

//

let tbody = myTable.createTBody();
arr.forEach(item => {
    // console.log(item)
//   console.log(item) // {id:1 , name:"Abhishek", age:21, city:"Delhi"}
 let itemValues = Object.values(item); // [1, "Abhishek", 21, "Delhi"]
  let newRow = tbody.insertRow();
   itemValues.forEach(v =>{
      let newCell = newRow.insertCell(); // td
      newCell.innerHTML = v;
   })
})