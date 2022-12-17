let takeData = (obj) => {
    for (let keys in obj) {
        if (keys == "rooms" || keys == "rating" || keys == "star_rating" || keys == "review" || keys == "review_count") {
            console.log(keys);
            continue
        }
        let tgName = document.querySelector(`#${keys} > label`).children[1].tagName
        console.log(tgName);
    }
}

let fetching = async () => {
    let data = await fetch('https://sore-plum-spider-hem.cyclic.app/hotels')
    data = await data.json()
    console.log(data);
    takeData(data)
}
fetching()
