import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar()

document.querySelector(".ancsearch").addEventListener("click", () => {
    console.log("1")
    window.location.href = './flight.select.html'
})



let from = document.querySelector(".leavein");
from.addEventListener("input", fun);
let too = document.querySelector(".goin");
console.log(too)
too.addEventListener("input", fun2);
let sound = new Audio();
sound.src = "./Mechanical-Keyboard-single-button-presses-5-www.FesliyanStudios.com.mp3"
let farr = [];
let fbasis = []

function fun() {
    sound.play()
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "bkd4MjdBU0tWeVhwM2ZSYkVvRzNrNkdEUlBlQjB5cXRKNVdvQjVTRA==");


    let data = from.value;
    data = data.slice(0, 3);
    // let a="a";
    let flag = false
    data = data.toUpperCase()
    //   for(let i=0;i<arr.length;i++){
    //     let sub=arr[i].split("-");
    //     // console.log(sub[1])
    //     if(data==sub[1]){
    //      flag=true;

    //      break
    //     }
    //   }
    //   console.log(flag)
    //   if(flag==false){
    //     let ran=Math.floor(Math.random()*36);
    //     sub=arr[ran].split("-")[1];
    //     data=sub
    //   }
    //   console.log(data)

    //     fetch(`https://api.countrystatecity.in/v1/countries/IN/states/${data}/cities`, requestOptions)
    //     .then(response => response.text())
    //     .then(result => {
    //     //     result.forEach((el)=>{
    //     //     console.log(el)
    //     // })
    //     console.log(result)
    // }
    // )
    // .catch(error => console.log('error', error));
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65',
            'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com'
        }
    };
    let valuea = from.value;
    if (valuea.includes(" ")) {
        let testarr = valuea.split(" ");
        let b = testarr.join("%20");
        console.log(b)
    }
    fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?iata=${data}`, options)
        .then(response => response.json())
        .then(response => fbasis = response)
        .catch(err => console.error(err));

    console.log(data)
    fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?name=${from.value}`, options)
        .then(response => response.json())
        .then(response => farr = response)
        .catch(err => console.error(err));
    majorappend(farr, fbasis);
    //   console.log(farr)
    document.querySelector(".drop-i>img").style.visibility = "hidden"
    document.querySelector(".drop-i>p").style.visibility = "hidden"
}

let arr = ['IN-WB', 'IN-UT', 'IN-UP', 'IN-TR', 'IN-TN', 'IN-TG', 'IN-SK', 'IN-RJ', 'IN-PY', 'IN-P', 'IN-OR', 'IN-NL', 'IN-MZ', 'IN-MP', 'IN-M', 'IN-ML', 'IN-MH', 'IN-LD', 'IN-LA', 'IN-KL', 'IN-KA', 'IN-JK', 'IN-JH', 'IN-HR', 'IN-HP', 'IN-G', 'IN-GA', 'IN-DL', 'IN-DH', 'IN-CT', 'IN-CH', 'IN-BR', 'IN-AS', 'IN-AR', 'IN-AP']

function majorappend(arr, arr2) {
    let div = document.querySelector(".drop-test");
    div.innerHTML = ""
    arr = arr.slice(0, 3)

    console.log(arr2);
    console.log(arr)
    arr2.forEach((el) => {
        let main_div = document.createElement("div");
        main_div.className = "airplanediv";
        let img = document.createElement("img");
        img.src = "https://cdn.vectorstock.com/i/preview-1x/60/44/paper-plane-thin-line-icon-airplane-jet-fly-vector-29676044.webp"
        let head = document.createElement("h2");
        let name = el.name;
        main_div.addEventListener("click", () => {
            savetolcleave(el.name)
        })
        name = name.slice(0, 27)
        head.innerText = name
        let img_div = document.createElement("div");

        let side_div = document.createElement("div");
        img_div.append(img);
        side_div.append(head)
        main_div.append(img, side_div);
        div.append(main_div)
    })
    arr.forEach((el) => {
        let main_div = document.createElement("div");
        main_div.className = "airplanediv";
        let img = document.createElement("img");
        img.src = "https://cdn.vectorstock.com/i/preview-1x/60/44/paper-plane-thin-line-icon-airplane-jet-fly-vector-29676044.webp"
        let head = document.createElement("h2");
        let name = el.name;
        main_div.addEventListener("click", () => {
            savetolcleave(el.name)
        })
        name = name.slice(0, 27)
        head.innerText = name
        let img_div = document.createElement("div");
        let side_div = document.createElement("div");
        img_div.append(img);
        side_div.append(head)
        main_div.append(img, side_div)
        div.append(main_div)
    })
}

let leaving = document.querySelector(".leaving");
let going = document.querySelector(".going");
let midbar = document.querySelector(".midbar");
let flag = false;
leaving.addEventListener("click", () => {
    let a = document.querySelector(".dropdown-leaving");
    a.style.visibility = "visible";
    // flag=true
    setTimeout(() => { console.log(flag = true) }, 100)
})
going.addEventListener("click", () => {
    let a = document.querySelector(".dropdown-leaving2");
    a.style.visibility = "visible";
    // flag=true
    setTimeout(() => { console.log(flag = true) }, 100)
})

midbar.addEventListener("click", () => {
    let a = document.querySelector(".dropdown-leaving");
    console.log(a.style.visibility);
    if (a.style.visibility == "visible" && flag === true) {
        a.style.visibility = "hidden";
        flag = false
    }
    let b = document.querySelector(".dropdown-leaving2");
    //    console.log(a.style.visibility);
    if (b.style.visibility == "visible" && flag === true) {
        b.style.visibility = "hidden";
        flag = false
    }
})

let leavingvar = document.querySelector(".leaving");
leavingvar.value = ""
let goingvar = document.querySelector(".going");
goingvar.value = ""



function savetolcleave(name) {
    leavingvar.value = name
    name = JSON.stringify(name);
    localStorage.setItem("leaving_place", name);
}
function savetolcleave2(name) {
    goingvar.value = name
    name = JSON.stringify(name);
    localStorage.setItem("going_place", name);
}



function fun2() {
    sound.play()
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "bkd4MjdBU0tWeVhwM2ZSYkVvRzNrNkdEUlBlQjB5cXRKNVdvQjVTRA==");


    let data = too.value;
    data = data.slice(0, 3);
    // let a="a";
    let flag = false
    data = data.toUpperCase()
    //   for(let i=0;i<arr.length;i++){
    //     let sub=arr[i].split("-");
    //     // console.log(sub[1])
    //     if(data==sub[1]){
    //      flag=true;

    //      break
    //     }
    //   }
    //   console.log(flag)
    //   if(flag==false){
    //     let ran=Math.floor(Math.random()*36);
    //     sub=arr[ran].split("-")[1];
    //     data=sub
    //   }
    //   console.log(data)

    //     fetch(`https://api.countrystatecity.in/v1/countries/IN/states/${data}/cities`, requestOptions)
    //     .then(response => response.text())
    //     .then(result => {
    //     //     result.forEach((el)=>{
    //     //     console.log(el)
    //     // })
    //     console.log(result)
    // }
    // )
    // .catch(error => console.log('error', error));
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '205e8a9fcamshff58f4166a55898p1c82d7jsn07826ca07c65',
            'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com'
        }
    };
    let valuea = too.value;
    if (valuea.includes(" ")) {
        let testarr = valuea.split(" ");
        let b = testarr.join("%20");
        console.log(b)
    }
    fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?iata=${data}`, options)
        .then(response => response.json())
        .then(response => fbasis = response)
        .catch(err => console.error(err));

    // console.log(data)
    fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?name=${too.value}`, options)
        .then(response => response.json())
        .then(response => farr = response)
        .catch(err => console.error(err));
    majorappend2(farr, fbasis);
    console.log("sneding...")
    document.querySelector(".drop-ie>img").style.visibility = "hidden"
    document.querySelector(".drop-ie>p").style.visibility = "hidden"
}


function majorappend2(arr, arr2) {
    console.log("receved")
    let div = document.querySelector(".drop-test2");
    div.innerHTML = ""
    arr = arr.slice(0, 5)

    console.log(arr2);
    console.log(arr)
    arr2.forEach((el) => {
        let main_div = document.createElement("div");
        main_div.className = "airplanediv";
        let img = document.createElement("img");
        img.src = "https://cdn.vectorstock.com/i/preview-1x/60/44/paper-plane-thin-line-icon-airplane-jet-fly-vector-29676044.webp"
        let head = document.createElement("h2");
        let name = el.name;
        main_div.addEventListener("click", () => {
            savetolcleave2(el.name)
        })
        name = name.slice(0, 27)
        head.innerText = name
        let img_div = document.createElement("div");

        let side_div = document.createElement("div");
        img_div.append(img);
        side_div.append(head)
        main_div.append(img, side_div);
        div.append(main_div)
    })
    arr.forEach((el) => {
        let main_div = document.createElement("div");
        main_div.className = "airplanediv";
        let img = document.createElement("img");
        img.src = "https://cdn.vectorstock.com/i/preview-1x/60/44/paper-plane-thin-line-icon-airplane-jet-fly-vector-29676044.webp"
        let head = document.createElement("h2");
        let name = el.name;
        main_div.addEventListener("click", () => {
            savetolcleave2(el.name)
        })
        name = name.slice(0, 27)
        head.innerText = name
        let img_div = document.createElement("div");
        let side_div = document.createElement("div");
        img_div.append(img);
        side_div.append(head)
        main_div.append(img, side_div)
        div.append(main_div)
    })
}


setTimeout(() => {
    document.querySelector(".loader").style.visibility = "hidden"
    document.querySelector(".promotion").style.visibility = "hidden"
    document.querySelector("body").className = "";
    document.querySelector(".dependent").style.display = "block"
}, 4000)




let drop_down = document.querySelector('#drpdwn')
drop_down.onclick = () => {
    document.getElementById('ak_navbar_sub_menu').style.display = 'block'
}

document.querySelector('#ak_navbar_sub_menu').onclick = () => {
    document.getElementById('ak_navbar_sub_menu').style.display = 'none'

}

document.querySelector('#sign-in').onclick = () => {
    window.location.href = 'signup.html'
}

/*
window.onload = () => {
    document.getElementById('logo').onclick = () => {
        console.log('clicking on');
        location = './index.html'
    }
    document.getElementById('logo').onclick = () => {
        console.log('clicking on');
        location = './index.html'
    }
    if (localStorage.getItem('token')) {
        document.getElementById('sign-in').innerText = JSON.parse(localStorage.getItem('first_name'))
        let dom = document.getElementById('navigate')
        let btn = document.createElement('button')
        // let btn = document.createElement('button')
        btn.innerText = 'logout'
        btn.style.backgroundColor = 'rgb(1, 36, 58)'
        btn.style.color = 'white'
        btn.style.border = 'none'
        btn.id = 'logout'
        btn.onmouseenter = () => {
            btn.style.color = '#2F71CD'
        }
        btn.onmouseleave = () => {
            btn.style.color = 'white'
        }
        dom.append(btn)
        dom.style.width = '40%'
    }
    document.getElementById('logout').onclick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('first_name')
        location.reload()
    }
}

*/