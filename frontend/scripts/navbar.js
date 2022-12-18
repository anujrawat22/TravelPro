

let drop_down=document.querySelector('#drpdwn')
drop_down.onclick=()=>{
    document.getElementById('ak_navbar_sub_menu').style.display='block'
}

document.querySelector('#ak_navbar_sub_menu').onclick=()=>{
    document.getElementById('ak_navbar_sub_menu').style.display='none'

}

document.querySelector('#sign-in').onclick=()=>{
    window.location.href='signup.html'
}