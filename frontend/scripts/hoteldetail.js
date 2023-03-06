
import { navbar } from "../components/navbar.js";
import barcode from "../components/bar_code.js";
import footer from "../components/footer.js";



document.getElementById("navbar").innerHTML = navbar()
document.getElementById("barcode").innerHTML = barcode()
document.getElementById("footer").innerHTML = footer()
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
if (hoteldata.payment_type[0]) {
  paylater.innerText = hoteldata.payment_type[0]
}


let refund = document.getElementById("refund")
if (hoteldata.payment_type[1]) {
  refund.innerText = hoteldata.payment_type[1]
}


let rating = document.getElementById("rating")
rating.innerText = `${hoteldata.rating} /10 ${hoteldata.review}`

let review = document.getElementById("reviews")
review.innerText = `See all the ${hoteldata.review_count} reviews`

let amenities = hoteldata.amenities
appendamenities(amenities)
function appendamenities(arr) {

  arr.forEach((el) => {
    let div = document.createElement("div")

    let p = document.createElement("p")
    p.innerText = el

    div.append(p)

    document.getElementById("showamenities").append(div)
  })

}


let explore = hoteldata.explore_neighbourhood
appendexplore(explore)

function appendexplore(arr) {
  arr.forEach((el) => {
    let div = document.createElement("div")

    let p = document.createElement("p")

    p.innerText = el

    div.append(p)

    document.getElementById("exploregrid").append(div)
  })
}


// appnding room data to room cards
let rooms = hoteldata.rooms
console.log(rooms)

roomcards(rooms)
function roomcards(arr) {

  arr.forEach((el) => {
    let hotelroomcard = document.querySelector("#hotelroomcard")

    let div = document.createElement("div")
    div.setAttribute("class", "hotelroom")

    let div1 = document.createElement("div")
    div1.setAttribute("class", "hotelroomimg")
    let img = document.createElement("img")
    img.setAttribute("class", "roomimg")
    img.src = el.room_image[0]

    div1.append(img)



    let div2 = document.createElement("div")
    div2.setAttribute("class", "hotel_name")
    let hotelname = document.createElement("p")
    hotelname.innerText = el.room_title
    div2.append(hotelname)

    let div3 = document.createElement("div")
    div3.setAttribute("class", "roomsize")
    let area = document.createElement("p")
    area.innerText = el.room_size
    div3.append(area)


    let div4 = document.createElement("div")
    div4.setAttribute("class", "reserveandpay")
    let reservetext = document.createElement("p")
    reservetext.innerText = "Reserve now, pay later"
    div4.append(reservetext)

    let div5 = document.createElement("div")
    div5.setAttribute("class", "moredetails")
    let moredetails = document.createElement("p")
    moredetails.innerText = "More details"
    div5.append(moredetails)

    let div6 = document.createElement("div")
    div6.setAttribute("class", "reservediv")

    let price = document.createElement("p")
    price.setAttribute("class", "roomprice")
    price.innerText = `Price -  $${el.room_price}`

    let reservebtn = document.createElement("button")
    reservebtn.setAttribute("class", "reservebtn")
    reservebtn.innerText = "Reserve"
    reservebtn.addEventListener("click", () => {
      reserveroom(el)
    })
    reservebtn.onclick = () => {
      window.location.href = "hotel_payment.html"
    }

    div6.append(price, reservebtn)


    let div7 = document.createElement("div")
    div7.setAttribute("class", "availability")
    let availability = document.createElement("p")
    if (el.is_available) {
      availability.innerText = "Available"
      availability.style.color = "green"
    } else {
      availability.innerText = "Currently Not available"
      availability.style.color = "red"
    }
    div7.append(availability)

    div.append(div1, div2, div3, div4, div5, div7, div6)
    hotelroomcard.append(div)

  })
}


// function for adding room details to local storage

function reserveroom(el) {

  let checkin = document.getElementById("datepicker1").value
  let checkout = document.getElementById("datepicker2").value
  let rooms = +document.getElementById("rooms").value
  let travelers = +document.getElementById("travelers").value
  el.checkin = checkin
  el.checkout = checkout
  el.no_of_rooms = rooms
  el.travelers = travelers

  localStorage.setItem("roomsdata", JSON.stringify(el))
}

/*
window.onload = () => {
  document.getElementById('logo').onclick = () => {
    console.log('clicking on');
    location = './index.html'
  }
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
}

*/