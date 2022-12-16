let sectionObj = document.getElementById("sections").children;
for (let sec in sectionObj) {
    sectionObj[sec].onclick = () => {
        // console.log(sectionObj[sec].children[1].innerText);
        document.getElementById("page-name").innerText =
            sectionObj[sec].children[1].innerText;
    };
}
