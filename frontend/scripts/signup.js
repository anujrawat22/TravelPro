//let url= https://staybackend.onrender.com/



window.onload = () => {
    if(localStorage.getItem('loginWithGoogle')){
        loginWithGoogle()
      }
    let password = document.getElementById("ak_password")
    password.oninput = () => {
        passwordCheck(password.value)
    }
}

let loader = () => {
    if (document.querySelector('.spinner').style.visibility == 'visible') {
        document.querySelector('.spinner').style.visibility = 'hidden'
    } else {
        document.querySelector('.spinner').style.visibility = 'visible'
    }
}


let x_mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
<!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
</svg>`
let check_mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
<path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
</svg>`

let SignUPbtn = document.getElementById("ak_signup_btn")
SignUPbtn.onclick = async (e) => {
    e.preventDefault();
    let first_name = document.getElementById("ak_first_name").value
    let last_name = document.getElementById("ak_last_name").value
    let email = document.getElementById("ak_email").value
    let password = document.getElementById("ak_password").value
    if (first_name && last_name && email && passwordCheck(password)) {
        let form = { first_name, last_name, email, password }

        //loader will start
        loader()

        const res = await fetch(`https://staybackend.onrender.com/signup`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const massage = await res.json()
        loader()
        console.log(massage);
        if (massage.MSG=='User Already Exist') {
            Swal.fire({
                title: 'User Already Exist!!',
                text: "Try with diffrent Email Id!",
                icon: 'warning',
                showCancelButton: false,
                background: '#202030',
                confirmButtonColor: '#C6604C',
                cancelButtonColor: "#AAAAAA",
                // confirmButtonText: 'Yes, add this hotel!'
            })

        }
        if (massage.token !== undefined) {
            localStorage.setItem('token', JSON.stringify(massage.token))
        }
        if (massage.userDetails !== undefined) {
            localStorage.setItem('first_name', JSON.stringify(massage.userDetails[0].first_name))
        }
        console.log(massage)
        // alert(massage.MSG)
        if (massage.MSG == 'Account has been created successfully') {
            localStorage.setItem('firstTimeLogdin', JSON.stringify(true))
            window.location.href = 'index.html'
        }

    } else if (!first_name || !last_name || !email || !password) {
        alert("Please fill all details")
    } else {
        alert("Please choose Strong password")
    }
}



const passwordCheck = (p) => {
    let passdiv = document.getElementById("ak_password_check")
    passdiv.innerHTML = null
    let a = ["Includes 8-16 characters", "Combines letters and numbers", "A special character ~#@$%&!*_?^-"]
    let len = document.createElement("p")
    let ULcase = document.createElement("p")
    let SpecialCharNum = document.createElement("p")
    len.innerHTML = `${x_mark}   ${a[0]}`
    ULcase.innerHTML = `${x_mark}   ${a[1]}`
    SpecialCharNum.innerHTML = `${x_mark}   ${a[2]}`
    let length = false
    let cases = false
    let special = false

    passdiv.append(len, ULcase, SpecialCharNum)

    if (p.length >= 8 && p.length <= 18) {
        len.style.color = "green"
        len.style.fill = "green"
        len.innerHTML = `${check_mark}   ${a[0]}`
        length = true
    } else {
        len.style.color = "red"
        len.style.fill = "red"
        length = false
    }
    if (containsUpperAndLower(p)) {
        ULcase.style.color = "green"
        ULcase.style.fill = "green"
        ULcase.innerHTML = `${check_mark}   ${a[1]}`
        cases = true
    } else {
        ULcase.style.color = "red"
        ULcase.style.fill = "red"
        cases = false
    }
    if (containsSpecialAndNumber(p)) {
        SpecialCharNum.style.color = "green"
        SpecialCharNum.style.fill = "green"
        SpecialCharNum.innerHTML = `${check_mark}   ${a[2]}`
        special = true
    } else {
        SpecialCharNum.style.color = "red"
        SpecialCharNum.style.fill = "red"
        special = false
    }
    if (special && cases && length) {
        return true
    } else {
        return false
    }

}

const containsUpperAndLower = (p) => {
    let l = "abcdefghijklmnopqrstuvwxyz"
    let u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let contains_lowercase = false
    let contains_uppercase = false
    for (let i = 0; i < p.length && !contains_lowercase; i++) {
        for (let j = 0; j < l.length && !contains_lowercase; j++) {
            if (l[j] == p[i]) {
                contains_lowercase = true
            }
        }

    }
    for (let i = 0; i < p.length && !contains_uppercase; i++) {
        for (let j = 0; j < u.length && !contains_uppercase; j++) {
            if (u[j] == p[i]) {
                contains_uppercase = true
            }
        }

    }
    if (contains_uppercase && contains_lowercase) {
        return true
    } else {
        return false
    }
}

const containsSpecialAndNumber = (p) => {
    let s = "!@#$%^&*()-+"
    let contains_number = false;
    let contains_special = false;
    for (let i = 0; i < p.length && !contains_number; i++) {
        if (Number.isInteger(+p[i])) {
            contains_number = true
        }
    }
    for (let i = 0; i < p.length && !contains_special; i++) {
        for (let j = 0; j < s.length && !contains_special; j++) {
            if (p[i] == s[j]) {
                contains_special = true
            }
        }
    }
    if (contains_number && contains_special) {
        return true
    } else {
        return false
    }
}



let googleButton = document.getElementById('google')
googleButton.onclick = () => {
    signupBygoogle()
}
async function signupBygoogle() {
    localStorage.setItem('loginWithGoogle',true)
    localStorage.setItem('login',true)
    localStorage.setItem('firstTimeLogdin', JSON.stringify(true))
   window.open('https://staybackend.onrender.com/auth/google');

}

let github=document.getElementById('github')
github.onclick=()=>{
    signUpByGithub()
}
async function signUpByGithub() {

    localStorage.setItem('firstTimeLogdin', JSON.stringify(true))
    localStorage.setItem('loginWithGoogle',true)
    localStorage.setItem('login',true)
}


function loginWithGoogle() {
    const url = window.location.search;
    const query = new URLSearchParams(url);
    const token = query.get('token');
    const name = query.get('name')
    console.log(token, name)
    if (token && name) {
        localStorage.setItem('token', token)
        localStorage.setItem('first_name', JSON.stringify(name))
    }
    localStorage.removeItem('loginWithGoogle')
   location.href='index.html'
}