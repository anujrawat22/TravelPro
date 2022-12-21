window.onload = () => {
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

    // if (localStorage.getItem('firstTimeLogdin')) {
    //     Swal.fire({
    //         title: 'Hey, Good job!!',
    //         text: `You logged in successfully!!`,
    //         textColor: "white",
    //         icon: 'success',
    //         // color: 'white',
    //         // iconColor: 'white',
    //         showCancelButton: false,
    //         // background: '#202030',
    //         // confirmButtonColor: '#C6604C',
    //         confirmButtonText: 'Ok'
    //     })
    //     localStorage.removeItem('firstTimeLogdin')
    // }

}