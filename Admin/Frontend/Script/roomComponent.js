// import fun from '../COMPONENT/room.js'

localStorage.setItem('room_count', 1)
let room_count = 1


document.getElementById('add-room').onclick = () => {
    let dom = document.getElementById('rooms-detail')
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let room_count = + localStorage.getItem('room_count')
    let delMain = document.createElement('button')
    let span = document.createElement('div')
    let del = document.createElement('div')
    let span2 = document.createElement('span')
    span.classList = 'material-symbols-outlined'
    span.innerHTML = 'delete'
    del.innerText = 'Delete'
    room_count++
    localStorage.setItem('room_count', room_count)
    let str = `Room ${room_count}`
    div.classList = 'rooms'
    delMain.classList = 'ignore'
    div.innerHTML = fun()
    h2.innerText = str
    console.log(h2);
    delMain.append(span, del)
    dom.append(h2)
    dom.append(div)
    dom.append(delMain)


    delMain.onclick = () => {
        console.log(delMain);
        let tmpObj = delMain.parentElement.children
        let len = Object.keys(tmpObj).length
        console.log(tmpObj);
        tmpObj[len - 1].remove()
        tmpObj[len - 2].remove()
        tmpObj[len - 3].remove()
        let lenOfRoom = localStorage.getItem('room_count')
        localStorage.setItem('room_count', lenOfRoom - 1)
    }

}

console.log("object");

