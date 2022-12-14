import { navbar } from "../reusable_components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

hoteldata()
async function  hoteldata(){
     
    let res = await fetch("https://sore-plum-spider-hem.cyclic.app/hotels")
    let data = await res.json()

    console.log(data)

}

function append(data){
   let hoteldiv  =   document.getElementById(displayhotels)
   hoteldiv.innerHTML = null
    data.foreach((el)=>{
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","hotelmaindiv")

       let div1 = document.createElement("div")
       div1.setAttribute("class","div1")
       
       let img = document.createElement("img")
       img.setAttribute("class","hotelimg")

       let name = document
    })
}