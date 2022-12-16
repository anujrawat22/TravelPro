
import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let hoteldata = JSON.parse(localStorage.getItem("hoteldata")) || {}

console.log(hoteldata)

let img1 = document.getElementById("hotelimg1")
img1.src = hoteldata.poster

let img2 = document.getElementById("hotelimg2")
img2.src = hoteldata.other_images[0]

let img3 = document.getElementById("hotelimg3")
img3.src = hoteldata.other_images[1]

let img4 = document.getElementById("hotelimg4")
img4.src = hoteldata.other_images[2]

let img5 = document.getElementById("hotelimg5")
img5.src = hoteldata.other_images[3]

let hotename = document.getElementById("hotelnameh1")
hotename.innerText = hoteldata.hotel_name

let star = document.getElementById("star")
star.innerText = `${hoteldata.star_rating} - star property`

let paylater = document.getElementById("paylater")
paylater.innerText = hoteldata.payment_type[0]

let refund = document.getElementById("refund")
refund.innerText = hoteldata.payment_type[1]

let rating = document.getElementById("rating")
rating.innerText = `${hoteldata.rating} /10 ${hoteldata.review}`

let review = document.getElementById("reviews")
review.innerText = `See all the ${hoteldata.review_count} reviews` 

let amenities = hoteldata.amenities
appendamenities(amenities)
function appendamenities(arr){

    arr.forEach((el)=>{
        let div = document.createElement("div")

        let p  = document.createElement("p")
        p.innerText = el

        div.append(p)

        document.getElementById("showamenities").append(div)
    })

}


let explore = hoteldata.explore_neighbourhood
appendexplore(explore)

function appendexplore(arr){
arr.forEach((el)=>{
    let div = document.createElement("div")

    let p = document.createElement("p")

    p.innerText = el

    div.append(p)

    document.getElementById("exploregrid").append(div)
})
}