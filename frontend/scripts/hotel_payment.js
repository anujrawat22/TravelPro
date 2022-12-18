function show1() {
    var x = document.getElementById("hide1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function show2() {
    var x = document.getElementById("hide2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

let yes = document.getElementById("yes")
yes.onclick =()=>{
  alert("Great choice! your stay is protected")
}

let no = document.getElementById("no")
no.onclick =()=>{
  alert("your stay is not protected")
}


function debitshow(){
  var x = document.getElementById("paypal_div");
  x.style.display = "none";
  var y = document.getElementById("debit_div");
  y.style.display = "block"
  var z = document.getElementById("click_div");
  z.style.display = "none"
  let name1 = document.getElementById("debit")
  name1.style.backgroundColor = "whitesmoke"
  let name2 = document.getElementById("paypal")
  name2.style.backgroundColor = "white"
  let name3 = document.getElementById("click")
  name3.style.backgroundColor = "white"
}

function paypal(){
  var x = document.getElementById("paypal_div");
  x.style.display = "block";
  var y = document.getElementById("debit_div");
  y.style.display = "none"
  var z = document.getElementById("click_div");
  z.style.display = "none"
  let name1 = document.getElementById("debit")
  name1.style.backgroundColor = "white"
  let name2 = document.getElementById("paypal")
  name2.style.backgroundColor = "whitesmoke"
  let name3 = document.getElementById("click")
  name3.style.backgroundColor = "white"
}

function clickon(){
  var x = document.getElementById("paypal_div");
  x.style.display = "none";
  var y = document.getElementById("debit_div");
  y.style.display = "none"
  var z = document.getElementById("click_div");
  z.style.display = "block"
  let name1 = document.getElementById("debit")
  name1.style.backgroundColor = "white"
  let name2 = document.getElementById("paypal")
  name2.style.backgroundColor = "white"
  let name3 = document.getElementById("click")
  name3.style.backgroundColor = "whitesmoke"
}

function show_signin(){
  let x = document.getElementById("mid_left-1_hide")
  x.style.display = "block"
}



