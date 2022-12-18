import footer from "../components/footer.js";
import barcode from "../components/bar_code.js";
import { navbar } from "../components/navbar.js";

document.getElementById('ak_footer').innerHTML = footer()
document.getElementById('ak_rewards').innerHTML = barcode()
document.getElementById('navbar').innerHTML = navbar()



let stays_div = document.getElementById('ak_form_stays')
let flight_div = document.getElementById('ak_form_flight')
let cars_div = document.getElementById('ak_form_stays')
let package_div = document.getElementById('ak_form_stays')
let ttd_div = document.getElementById('ak_form_stays')
let cruises_div = document.getElementById('ak_form_stays')

let stay = document.getElementById('ak_stays')
let flight = document.getElementById('ak_flight')
let car = document.getElementById('ak_cars')
let packages = document.getElementById('ak_package')
let ttd = document.getElementById('ak_ttd')
let cruise = document.getElementById('ak_cruise')




stay.onclick = () => {
    stays_div.style.display = 'block'
    flight_div.style.display = 'none'
    document.querySelector('#ak_stays>span').style.color = '#187e93'
    document.querySelector('#ak_flight>span').style.color = '#616161'
    document.querySelector('#ak_cars>span').style.color = '#616161'
    document.querySelector('#ak_package>span').style.color = '#616161'
    document.querySelector('#ak_ttd>span').style.color = '#616161'
}

flight.onclick = () => {
    stays_div.style.display = 'none'
    flight_div.style.display = 'block'
    document.querySelector('#ak_flight>span').style.color = '#187e93'
    document.querySelector('#ak_stays>span').style.color = '#616161'
    document.querySelector('#ak_stays>span').style.color = '#616161'
    document.querySelector('#ak_package>span').style.color = '#616161'
    document.querySelector('#ak_cars>span').style.color = '#616161'
    document.querySelector('#ak_ttd>span').style.color = '#616161'
    document.querySelector('#ak_cruise>span').style.color = '#616161'


}

car.onclick = () => {
    document.querySelector('#ak_cars>span').style.color = '#187e93'
    document.querySelector('#ak_stays>span').style.color = '#616161'
    document.querySelector('#ak_flight>span').style.color = '#616161'
    document.querySelector('#ak_package>span').style.color = '#616161'
    document.querySelector('#ak_ttd>span').style.color = '#616161'
    document.querySelector('#ak_cruise>span').style.color = '#616161'


}
packages.onclick = () => {
    document.querySelector('#ak_package>span').style.color = '#187e93'
    document.querySelector('#ak_stays>span').style.color = '#616161'
    document.querySelector('#ak_flight>span').style.color = '#616161'
    document.querySelector('#ak_cars>span').style.color = '#616161'
    document.querySelector('#ak_ttd>span').style.color = '#616161'
    document.querySelector('#ak_flight>span').style.color = '#616161'
    document.querySelector('#ak_cruise>span').style.color = '#616161'



}
ttd.onclick = () => {
    document.querySelector('#ak_ttd>span').style.color = '#187e93'
    document.querySelector('#ak_stays>span').style.color = '#616161'
    document.querySelector('#ak_package>span').style.color = '#616161'
    document.querySelector('#ak_flight>span').style.color = '#616161'
    document.querySelector('#ak_cars>span').style.color = '#616161'
    document.querySelector('#ak_cruise>span').style.color = '#616161'
}
cruise.onclick = () => {
    document.querySelector('#ak_cruise>span').style.color = '#187e93'
    document.querySelector('#ak_stays>span').style.color = '#616161'
    document.querySelector('#ak_package>span').style.color = '#616161'
    document.querySelector('#ak_flight>span').style.color = '#616161'
    document.querySelector('#ak_cars>span').style.color = '#616161'
    document.querySelector('#ak_ttd>span').style.color = '#616161'
}