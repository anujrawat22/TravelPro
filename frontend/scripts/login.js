

let SignUPbtn =document.getElementById("ak_signup_btn")
SignUPbtn.onclick=async (e)=>{
    e.preventDefault();
    let email = document.getElementById("ak_email").value
    let password = document.getElementById("ak_password").value   
    if(email&&password){
        let form={email,password}
        const res=await fetch(`https://sore-plum-spider-hem.cyclic.app/user/login`,{
            method:"POST",
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const massage=await res.json()
        if(massage.token){
        localStorage.setItem('token',JSON.stringify(massage.token))
        }
        if(massage.userDetails[0].first_name){
        localStorage.setItem('first_name',JSON.stringify(massage.userDetails[0].first_name))
         }
        console.log(massage)
        alert(massage.MSG)

    }else if(!email||!password){
       alert("Please fill all details")
    }
}