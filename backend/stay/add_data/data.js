let btn = document.getElementById("submit");

btn.onclick=()=>{
    console.log("hi")
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lname").value
    let mobile = document.getElementById("mobile").value
    let city = document.getElementById("city").value
    let state=document.getElementById("state").value
    let  address=document.getElementById("address").value

    let obj = {
        name,
        lastName,
        mobile,
        city,
        state,
        address
    }
    console.log(obj)

    fetch("https://sore-plum-spider-hem.cyclic.app/hotels/create",{
        method : "POST",
            body : JSON.stringify(obj),
            headers : {
                'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))  
};








// let dat = document.getElementById("other")

// let arr = dat.split(" ")
// console.log(arr)