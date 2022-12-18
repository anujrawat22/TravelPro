// import Swal from '../node_modules/sweetalert2'

// import 'sweetalert2/src/sweetalert2.scss'

// console.log(Swal);
console.log('khl');

let sectionObj = document.getElementById("sections").children;
for (let sec in sectionObj) {
    sectionObj[sec].onclick = () => {
        // console.log(sectionObj[sec].children[1].innerText);
        document.getElementById("page-name").innerText =
            sectionObj[sec].children[1].innerText;
    };
}