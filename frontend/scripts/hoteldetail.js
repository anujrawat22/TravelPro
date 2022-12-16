
import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let hoteldata = JSON.parse(localStorage.getItem("hoteldata")) || {}

console.log(hoteldata)