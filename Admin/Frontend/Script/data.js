const sendData = {}

let takeData = (obj) => {
    for (let keys in obj) {
        if (keys == "rooms" || keys == "rating" || keys == "star_rating" || keys == "review" || keys == "_id" || keys == "review_count" || keys == "userID" || keys == "__v") {
            console.log(keys, 'special');
            continue
        }
        console.log(keys);
        let tgName = document.querySelector(`#${keys} > label`)?.children[1].tagName
        let val = document.querySelector(`#${keys} > label`)?.children[1].value
        console.log(tgName);
        if (tgName == 'TEXTAREA') {
            val = val.split('\n')
        }
        sendData[keys] == val
        console.log(val);

    }

}

let fetching = async () => {
    let data = await fetch('https://sore-plum-spider-hem.cyclic.app/hotels')
    data = await data.json()
    console.log(data);
    takeData(data[0])
}
fetching()
