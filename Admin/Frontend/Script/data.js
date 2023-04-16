// const e = require("express");

const sendToServer = async (body) => {
    const response = await fetch(
        "https://staybackend.onrender.com/admin/hotel/create",
        {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "authorization": `balel ${JSON.parse(localStorage.getItem('token'))}`
            },
        }
    );
    // const result = await JSON.parse(response)
    const result = await response.text();
    console.log(result);
    if (result == 'hoteldata created') {
        console.log(true);
        return true
    } else {
        console.log(false);
        return false
    }
    // console.log(result, 'added to databaseeeee');
}

const sendData = {}
// swal()

let allFeild = () => {
    let truth = true
    let inp = document.querySelectorAll('input')
    inp.forEach((el) => {
        console.log(el);
        if (el.value == '') {
            // console.log('yessssssssssssssssssssss');
            truth = false
            if (el.parentElement.id == 'search') {
                truth = true
            }
        }
    })
    let txtAr = document.querySelectorAll('textarea')
    txtAr.forEach((el) => {
        console.log(el);
        if (el.value == "") {
            // console.log('yesssssssssssssss');
            truth = false
        }
    })
    return truth
}

let logdin = () => {
    if (localStorage.getItem('token')) {
        return true
    } else {
        return false
    }
}

let loader = () => {
    if (document.querySelector('.spinner').style.visibility == 'visible') {
        document.querySelector('.spinner').style.visibility = 'hidden'
    } else {
        document.querySelector('.spinner').style.visibility = 'visible'
    }
}
let lastDate

let takeData = async (obj) => {

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

    const tmpTruth = await sendToServer(sendData)
    console.log(tmpTruth, 'tmptruth');
    return tmpTruth
    // send the data to server

}

let fetching = async () => {
    let data = await fetch('https://staybackend.onrender.com/hotels')
    data = await data.json()
    console.log(data[0]);
    let dataAdded = await takeData(data[0])
    loader()
    console.log(dataAdded, 'dataadded');
    let dif = ((Date.now() - lastDate) / 1000).toFixed(1)
    if (dataAdded) {
        Swal.fire({
            title: 'Hey, Good job!!',
            text: `It takes only ${dif} s to add your hotel`,
            textColor: "white",
            icon: 'success',
            color: 'white',
            // iconColor: 'white',
            showCancelButton: false,
            background: '#202030',
            confirmButtonColor: '#C6604C',
            confirmButtonText: 'Ok'
        })

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: "don't add text data into number feild",
            background: '#202030',
            color: 'white'
        })
    }
}

// [1name,2name,3name] [1siz,2siz,3siz]
document.getElementById('submitBtn').onclick = () => {
    if (logdin()) {
        if (allFeild()) {
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
                    lastDate = Date.now()
                    loader()
                    fetching()
                    // Swal.fire(
                    //     'Deleted!',
                    //     'Your file has been deleted.',
                    //     'success'
                    // )
                }
            })

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All feilds are mandatory!',
                background: '#202030',
                color: 'white'
            })
        }

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'login First or create new account!',
            background: '#202030',
            color: 'white'
        }).then((result) => {
            location = './signin.html'
        })

    }
}