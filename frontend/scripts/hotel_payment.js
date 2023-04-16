

document.getElementById('index').onclick=()=>{
  window.location='index.html'
}

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

const showdetails = (el)=>{
  console.log(el)
  let room_img = document.getElementById("hotel_img")
  room_img.src = el.room_image[0]

  let room_name = document.getElementById("room_name")
  room_name.innerText = el.room_title

  let checkin = document.getElementById("check_in")
  checkin.innerText = el.checkin

  let checkout = document.getElementById("check_out")
  checkout.innerText = el.checkout

  let r_price = document.getElementById("r_price")
  r_price.innerText = el.room_price

  let total = document.getElementById("total")
  total.innerText = (+el.room_price)+8
      
}

const getdata = ()=>{
  let data = JSON.parse(localStorage.getItem('roomsdata'))
  //console.log(data)
  showdetails(data)
}
getdata()





//submit
let btn = document.getElementById("btn");

btn.onclick=()=>{
  
    let fname = document.getElementById("first_name").value;
    let lname = document.getElementById("last_name").value;
    let mobile = document.getElementById("mobile_number").value
    let email = document.getElementById("email_id").value;
    let cardname =document.getElementById("four_3in").value;
    let cardnumber = document.getElementById("four_4in").value
    let expdate = document.getElementById("four_5in").value
    let  securityCode = document.getElementById("four_6in").value
    let zipcode = document.getElementById("four_6_2in").value

    let password = document.getElementById("pass").value;
    let confirmpassword = document.getElementById("cpass").value
    let roomprice = document.getElementById("r_price").innerHTML
    let tax = document.getElementById("r_tax").textContent
    rprice = (+roomprice)
    t = (+tax)
    let total =  (rprice) + (+t)

    let obj = {
        fname,
        lname,
        mobile,
        email,
        password,
        confirmpassword,
        roomprice : rprice,
        tax:t,
        total,
        card:{
          cardname,
          cardnumber,
          expdate,
          securityCode,
          zipcode
        }

    }
    console.log(obj)

    fetch("https://staybackend.onrender.com/payment/create",{
        method:"POST",
        body : JSON.stringify(obj),
        headers : {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)     
    })
    .catch((err) => console.log(err))
    
  window.location.href = "end.html"      
}


