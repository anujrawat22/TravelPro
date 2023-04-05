import { navbar } from "../components/navbar.js";
import footer from "../components/footer.js"
import barcode from "../components/bar_code.js";



document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()
document.getElementById("barcode").innerHTML = barcode()
const url = "https://staybackend.onrender.com/hotels"


hoteldata()
async function hoteldata() {

    let res = await fetch(url)
    let data = await res.json()
    // console.log(data)
    appendhotel(data)

}



let visiblebtn = document.getElementById("destidetail")
visiblebtn.addEventListener("click", searchvisibility)


// searchdivvisibility
function searchvisibility() {
    document.getElementById("hotelsearchdiv").style.visibility = "visible"
}



let cancelbtn = document.getElementById("cancelbtn")
cancelbtn.addEventListener("click", hotelsearchdiv)


//hotelsearchdiv visibility none 
function hotelsearchdiv() {

    document.getElementById("hotelsearchdiv").style.visibility = "hidden"
}


let hotelinput = document.getElementById("hotelinput")
hotelinput.addEventListener("input", searchhotels)

async function searchhotels() {

    let res = await fetch(`${url}/search?city=${hotelinput.value}`)
    let data = await res.json()
    console.log(data)

}












//append function
function appendhotel(data) {

    let hoteldiv = document.getElementById("displayhotels")
    hoteldiv.innerHTML = null
    data.forEach((el) => {
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class", "hotelmaindiv")
        maindiv.addEventListener("click", () => {
            addtolocalstorage(el)
        })


        let div1 = document.createElement("div")
        div1.setAttribute("class", "div1")

        let img = document.createElement("img")
        img.setAttribute("class", "hotelimg")
        img.src = el.poster
        div1.append(img)

        let div2 = document.createElement("div")
        div2.setAttribute("class", "div2")

        let hotelname = document.createElement("div")
        hotelname.setAttribute("class", "hotelname")

        let h3 = document.createElement("h3")
        h3.innerText = el.hotel_name
        h3.setAttribute("class", "hotelnameh3")
        let p = document.createElement("p")
        p.innerText = el.hotel_address
        p.setAttribute("class", "hoteladdressp")
        hotelname.append(h3, p)

        let hoteldetails = document.createElement("div")
        hoteldetails.setAttribute("class", "hoteldetails")

        let detaildiv = document.createElement("div")


        let reserve_now = document.createElement("p")
        reserve_now.setAttribute("class", "payment_type")
        reserve_now.innerText = el.payment_type

        let reviews = document.createElement("p")
        reviews.setAttribute("class", "reviews")
        reviews.innerText = `${el.rating}/10` + "  " + `${el.review}` + " " + `(${el.review_count} views)`

        detaildiv.append(reserve_now, reviews)

        let price_div = document.createElement("div")

        let discount = document.createElement("p")
        discount.setAttribute("class", "discount")
        if (el.discount) {
            discount.innerText = `${el.discount}% off`
        } else {
            discount.innerText = `we have only ${el.room_left
                } left at`
            discount.style.backgroundColor = "rgb(85, 202, 206)"
        }

        let price = document.createElement("p")
        price.id = "price"
        price.innerText = `$${el.price}`

        let total = document.createElement("p")
        price.setAttribute("class", "total")

        price_div.append(discount, price, total)

        hoteldetails.append(detaildiv, price_div)

        div2.append(hotelname, hoteldetails)

        maindiv.append(div1, div2)

        document.getElementById("displayhotels").append(maindiv)
    })
}


//addingdatainlocalstorage

function addtolocalstorage(el) {
    localStorage.setItem("hoteldata", JSON.stringify(el))

    window.location.href = "hoteldetail.html"
}







// search hotel inputbox

let select = document.getElementById("select")
select.addEventListener("change", sortandappned)

async function sortandappned() {
    console.log("working")
    let res = await fetch(url)
    let data = await res.json()
    console.log(select.value)
    if (select.value === "Recommended") {
        sortrecommended(data)
    } else if (select.value === "Price") {
        sortprice(data)
    } else if (select.value === "Distance form downtown") {
        sortdistance(data)
    } else if (select.value === "Guest Rating + Our Picks") {
        sortonguestrating(data)
    } else if (select.value === "Star Rating") {
        sortonrating(data)
    }
}

//sortrecommended

function sortrecommended(data) {
    console.log("hello")
    data = data.filter((el) => {
        return el.rating >= 8.5
    })

    console.log(data)
    appendhotel(data)
}

function sortprice(data) {
    console.log("price")
    data = data.sort((a, b) => {
        return a.price - b.price
    })

    console.log(data)
    appendhotel(data)
}

function sortdistance(data) {
    console.log("distance")

    data = data.sort((a, b) => {
        return a.distance - b.distance
    })

    appendhotel(data)
}

function sortonguestrating(data) {
    console.log("guestrating")

    data = data.sort((a, b) => {
        return b.rating - a.rating
    })

    appendhotel(data)
}


function sortonrating(data) {

    console.log("rating")

    data = data.sort((a, b) => {
        return b.star_rating - a.star_rating
    })

    appendhotel(data)
}

window.onload = () => {
    document.getElementById('logo').onclick = () => {
        console.log('clicking on');
        location = './index.html'
    }
}