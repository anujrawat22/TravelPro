document.getElementById('logo').onclick = () => {
    location = './index.html'
}
    if (localStorage.getItem('token')) {
        document.getElementById('sign-in').innerText = JSON.parse(localStorage.getItem('first_name'))
        let dom = document.getElementById('navigate')
        let div=document.createElement('div');
        let p=document.createElement('p');
        p.innerText='Logout'
        p.id='logout'
        div.append(p);
        dom.append(div)
      
        // // let btn = document.createElement('button')
        // btn.innerText = 'logout'
        // btn.style.backgroundColor = 'rgb(1, 36, 58)'
        // btn.style.color = 'white'
        // btn.style.border = 'none'
        // btn.id = 'logout'
        p.onmouseenter = () => {
            p.style.color = '#2F71CD'
        }
        p.onmouseleave = () => {
            p.style.color = 'white'
        }
        dom.style.width = '40%'

    }
    document.getElementById('logout').onclick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('first_name')
        location.reload()
    }

