import footer from "../components/footer.js";
import barcode from "../components/bar_code.js";
import {navbar} from "../components/navbar.js";

document.getElementById('ak_footer').innerHTML=footer()
document.getElementById('ak_rewards').innerHTML=barcode() 
document.getElementById('navbar').innerHTML=navbar()  


// let flight_div=document.getElementById('ak_flight')
// flight_div.onclick=()=>{
//     document.getElementById('ak_form_stays').style.display='none'
//     document.getElementById('ak_form_flight').style.display='block'
// }