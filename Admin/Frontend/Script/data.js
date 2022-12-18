const sendData = {}
// swal()

let loader = () => {
    if (document.querySelector('.spinner').style.visibility == 'visible') {
        document.querySelector('.spinner').style.visibility = 'hidden'
    } else {
        document.querySelector('.spinner').style.visibility = 'visible'
    }
}


let takeData = (obj) => {

    // adding general detail and extra detail of hotel
    for (let keys in obj) {
        if (keys == "rooms" || keys == "rating" || keys == "star_rating" || keys == "review" || keys == "_id" || keys == "review_count" || keys == "userID" || keys == "__v") {
            // console.log(keys, 'special');
            continue
        }
        // console.log(keys);
        let tgName = document.querySelector(`#${keys} > label`)?.children[1].tagName
        let val = document.querySelector(`#${keys} > label`)?.children[1].value

        if (keys == "reserve_Status") {
            if (val == 'true') {
                sendData["reserve_Status"] = true
            } else {
                sendData["reserve_Status"] = false
            }
            console.log(sendData["reserve_Status"]);
            // console.log(Boolean(val));
            continue
        }
        // console.log(tgName);
        if (tgName == 'TEXTAREA') {
            val = val.split('\n')
            sendData[keys] = val
            continue
        }
        val = Number(val) || val
        sendData[keys] = val
        // console.log(val);


    }

    sendData["rating"] = + (Math.random() * (9 - 6 + 1) + 6).toFixed(1)
    sendData["star_rating"] = Math.floor(Math.random() * (5 - 4 + 1) + 4)
    sendData["review_count"] = Math.floor(Math.random() * (1000 - 200 + 1) + 200)
    if (sendData["rating"] > 9) {
        sendData["review"] = 'Excellent'
    } else {
        sendData["review"] = 'Good'
    }
    console.log(sendData)

    // adding rooms data
    let allRoom = document.querySelectorAll('.rooms')
    let noOfRoom = allRoom.length
    let rooms = new Array(noOfRoom)

    for (let i = 0; i < noOfRoom; i++) {
        let tmpObj = {}
        for (let roomIds in obj['rooms'][0]) {
            let tmp = document.querySelectorAll(`.${roomIds} > label`)
            // let tmp = document.querySelectorAll(`.${roomIds} > label`)
            if (roomIds == '_id') {
                continue
            }
            if (roomIds == 'is_available') {
                tmpObj['is_available'] = true
                continue
            }
            if (roomIds == 'Reserve') {
                if (tmp[i].children[1].value == 'true') {
                    tmpObj[roomIds] = true
                } else {
                    tmpObj[roomIds] = false
                }
                continue
            }
            if (tmp[i]?.children[1].tagName == 'TEXTAREA') {
                tmpObj[roomIds] = tmp[i].children[1].value.split('\n')
                continue
            }
            console.log(tmpObj, i);
            tmpObj[roomIds] = Number(tmp[i].children[1].value) || tmp[i].children[1].value
            console.log(tmpObj, i);
            console.log(rooms);
            console.log(tmp[i].children[1].value, 'jkl');

        }
        console.log("lormelksjdfasdf lskromlsdf lrokalsdfkajsarlk j");
        // rooms.push(tmpObj)
        rooms[i] = tmpObj
    }
    console.log(rooms, 'trooms');
    sendData["rooms"] = rooms
    console.log(sendData);
}

let fetching = async () => {
    let data = await fetch('https://sore-plum-spider-hem.cyclic.app/hotels')
    data = await data.json()
    console.log(data[0]);
    takeData(data[0])
}

// [1name,2name,3name] [1siz,2siz,3siz]
document.getElementById('submitBtn').onclick = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to add this hotel!",
        icon: 'info',
        showCancelButton: true,
        background: '#202030',
        confirmButtonColor: '#C6604C',
        cancelButtonColor: "#AAAAAA",
        confirmButtonText: 'Yes, add this hotel!'
    }).then((result) => {
        if (result.isConfirmed) {
            loader()
            fetching()
            // Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            // )
        }
    })
}