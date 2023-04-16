let loaderb = () => {
    if (document.querySelector('.spinner').style.visibility == 'visible') {
        document.querySelector('.spinner').style.visibility = 'hidden'
    } else {
        document.querySelector('.spinner').style.visibility = 'visible'
    }
}

console.log('khl');

let signInPage = () => {
    location = './signin.html'
}

let sectionObj = document.getElementById("sections").children;
for (let sec in sectionObj) {
    sectionObj[sec].onclick = () => {
        // console.log(sectionObj[sec].children[1].innerText);
        document.getElementById("page-name").innerText =
            sectionObj[sec].children[1].innerText;
    };
}


window.onload = () => {
    document.getElementById('user').addEventListener('click', signInPage)
    let dom = document.getElementById('user')
    if (localStorage.getItem('token')) {
        // alert('yes logdin')
        let div = document.createElement('div')
        div.id = 'logout'
        let div2 = document.createElement('div')
        let nameBtn = document.createElement('button')
        nameBtn.innerText = 'Pratap Sah'
        // div.innerText = 'PS'
        // div.style.width = '20px'
        // div.style.height = '20px'
        // div.style.borderRadius = '30%'
        // div.style.backgroundColor = '#202030'
        div.style.color = '#dc3545'
        // div.style.padding = '12px'
        // div.style.fontSize = '20px'
        div2.style.marginLeft = '10px'
        nameBtn.style.color = '#dc3545'
        let sp = document.createElement('spaan')
        sp.classList = 'material-symbols-outlined'
        sp.innerText = 'logout'
        dom.innerHTML = null
        div.append(sp)
        div2.append(nameBtn)
        dom.append(div)
        dom.append(div2)
        document.getElementById('user').removeEventListener('click', signInPage)

        // logout
        document.getElementById('logout').onclick = () => {
            loaderb()
            setTimeout(() => {
                localStorage.removeItem('token')
                location.reload()
            }, 2000);
        }
    }

    document.getElementById('hamberger').onclick = () => {
        document.getElementById('main').style.marginLeft = '2vw'
        document.getElementById('navbar').style.marginLeft = '0'
        document.getElementById('navbar').style.width = '100vw'
        document.getElementById('sidebar').style.display = 'none'
        document.getElementById('nav-hamberger').style.visibility = 'visible'

    }
    document.getElementById('nav-hamberger').onclick = () => {
        // document.getElementById('main').style.marginLeft = '20vw'
        // document.getElementById('navbar').style.marginLeft = '18vw'
        // document.getElementById('navbar').style.width = '80vw'
        document.getElementById('sidebar').style.display = 'block'
        document.getElementById('nav-hamberger').style.visibility = 'hidden'
    }
}
