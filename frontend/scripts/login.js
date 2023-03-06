


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
        const res = await fetch(`https://dull-ruby-cockroach-wrap.cyclic.app/login`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const massage = await res.json()
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