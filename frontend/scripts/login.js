window.onload = () => {
    if(localStorage.getItem('loginWithGoogle')){
        loginWithGoogle()
      }
}


let loader = () => {
    if (document.querySelector('.spinner').style.visibility == 'visible') {
        document.querySelector('.spinner').style.visibility = 'hidden'
    } else {
        document.querySelector('.spinner').style.visibility = 'visible'
    }
}


let SignUPbtn = document.getElementById("ak_signup_btn")
SignUPbtn.onclick = async (e) => {
    e.preventDefault();
    console.log(e)
    let email = document.getElementById("ak_email").value
    let password = document.getElementById("ak_password").value
    if (email && password) {
        loader()
        let form = { email, password }
        const res = await fetch(`https://staybackend.onrender.com/login`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const massage = await res.json()
        console.log(massage)
     loader()
        if (massage.MSG == 'Login sueccesfull') {
            Swal.fire({
                title: 'Hey, Good job!!',
                text: `You logged in successfully!!`,
                textColor: "white",
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: 'Ok'
            })
            localStorage.setItem('token', JSON.stringify(massage.token))
            localStorage.setItem('first_name', JSON.stringify(massage.userDetails[0].first_name))

            setTimeout(()=>{
            window.location.href = 'index.html'
            },1000)
        }
        else if (massage.MSG == 'Something went wrong') {
            Swal.fire({
                title: 'Something went wrong!!',
                text: `Try again later`,
                textColor: "white",
                icon: 'warning',
                showCancelButton: false,
                confirmButtonText: 'Ok'
            })
        }
        else {
            Swal.fire({
                title: 'Incorrect password!!',
                text: `Try again later`,
                textColor: "white",
                icon: 'warning',
                showCancelButton: false,
                confirmButtonText: 'Ok'
            })
        }

    } else if (!email || !password) {
        alert("Please fill all details")
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